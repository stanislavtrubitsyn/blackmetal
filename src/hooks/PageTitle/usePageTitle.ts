import { useRouteStore } from '@/store/RouteStore/useRouteStore'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const usePageTitle = () => {
	const location = useLocation()
	const { routes } = useRouteStore()

	useEffect(() => {
		if (!routes.length) return
		const currentRoute = routes.find(route => route.path === location.pathname)
		document.title = currentRoute ? `${currentRoute.title} | App` : 'App'
	}, [location.pathname, routes])
}
