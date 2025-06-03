import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Loader from '@/components/Loader'
import MainLayout from '@/layouts/MainLayout'
import routes from '@/router/routes.json'
import { RouteConfig } from '@/router/types'

// Предварительно импортируем все страницы
const HomePage = lazy(() => import('@/pages/HomePage'))
const DashboardPage = lazy(() => import('@/pages/DashboardPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

const componentMap = {
	HomePage,
	DashboardPage,
	NotFoundPage,
}

const Router = () => {
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				{Object.entries(routes as Record<string, RouteConfig>).map(([key, route]) => {
					const Component =
						componentMap[route.component as keyof typeof componentMap] || NotFoundPage
					const Layout = route.layout
						? MainLayout
						: ({ children }: { children: React.ReactNode }) => <>{children}</>

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
}

export default Router
