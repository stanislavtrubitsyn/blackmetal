// Router.tsx
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import routes from '@/router/routes.json'
import { RouteConfig } from '@/router/types'
import Loader from '@/components/Loader'
import MainLayout from '@/layouts/MainLayout'
import HeaderOnlyLayout from '@/layouts/HeaderOnlyLayout/HeaderOnlyLayout'

const pages = import.meta.glob('../pages/**/*.tsx') as Record<
	string,
	() => Promise<{ default: React.ComponentType<any> }>
>

const Router = () => (
	<Suspense fallback={<Loader />}>
		<Routes>
			{Object.entries(routes as Record<string, RouteConfig>).map(([key, route]) => {
				const importPath = `../pages/${route.component}/${route.component}.tsx`
				const importPage = pages[importPath]

				const Component = lazy(() => {
					if (!importPage) {
						console.error('❌ Страница не найдена:', importPath)
						return Promise.reject(new Error(`Page not found: ${route.component}`))
					}
					return importPage()
				})

				// Выбираем layout в зависимости от настроек маршрута
				let Layout
				if (route.layout === 'HeaderOnlyLayout') {
					Layout = HeaderOnlyLayout
				} else if (route.layout === 'MainLayout') {
					Layout = MainLayout
				} else {
					// Без layout - только компонент
					Layout = ({ children }: { children: React.ReactNode }) => <>{children}</>
				}

				return (
					<Route
						key={key}
						path={route.path}
						element={
							<Layout>
								<Component />
							</Layout>
						}
					/>
				)
			})}
		</Routes>
	</Suspense>
)

export default Router
