import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Loader from '@/components/Loader'
import MainLayout from '@/layouts/MainLayout'
import routes from '@/router/routes.json'
import { RouteConfig } from '@/router/types'

const Router = () => {
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				{Object.entries(routes as Record<string, RouteConfig>).map(
					([key, route]) => {
						const Component = lazy(
							() => import(/* @vite-ignore */ `../pages/${route.component}`)
						)

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
					}
				)}
			</Routes>
		</Suspense>
	)
}

export default Router
