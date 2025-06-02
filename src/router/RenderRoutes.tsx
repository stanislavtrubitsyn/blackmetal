import { Loader } from '@/components'
import { usePageTitle } from '@/hooks/PageTitle/usePageTitle'
import { useRouteStore } from '@/store/RouteStore/useRouteStore'
import { Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthGuard from './AuthGuard'

const RenderRoutes = () => {
	const { routes, loadRoutes } = useRouteStore()
	usePageTitle()

	useEffect(() => {
		if (!routes.length) loadRoutes()
	}, [routes.length])

	if (!routes.length) return <Loader />

	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				{routes.map(
					({
						path,
						element: Component,
						private: isPrivate,
						layout: Layout,
					}) => {
						const PageComponent = isPrivate ? (
							<AuthGuard>
								<Component />
							</AuthGuard>
						) : (
							<Component />
						)

						return (
							<Route
								key={path}
								path={path}
								element={
									Layout ? <Layout>{PageComponent}</Layout> : PageComponent
								}
							/>
						)
					}
				)}
			</Routes>
		</Suspense>
	)
}

export default RenderRoutes
