import { lazy } from 'react'
import { layouts } from './layouts'
import routesJson from './routes.json'

const components = import.meta.glob('/src/pages/**/index.tsx')

export interface RouteType {
	path: string
	element: React.LazyExoticComponent<React.FC>
	title: string
	private?: boolean
	layout?: React.FC<{ children: React.ReactNode }>
}

const getRoutesFromToken = async (): Promise<any[]> => {
	const token = localStorage.getItem('token')
	if (!token) return []

	try {
		const decoded = JSON.parse(atob(token.split('.')[1]))
		return Array.isArray(decoded.routes) ? decoded.routes : []
	} catch (error) {
		console.error('Ошибка декодирования токена:', error)
		return []
	}
}

const NotFoundFallback = lazy(() => import('@/pages/NotFoundPage'))

export const getRoutes = async (): Promise<RouteType[]> => {
	const backendRoutes = await getRoutesFromToken()
	const allRoutes = [...routesJson, ...backendRoutes]

	return allRoutes.map(route => {
		const componentPath = `/src/pages/${route.component}/index.tsx`
		const Component = components[componentPath]
			? lazy(() =>
					(
						components[componentPath] as () => Promise<{ default: React.FC }>
					)().then(m => ({ default: m.default }))
			  )
			: NotFoundFallback

		return {
			...route,
			element: Component,
			layout: route.layout ? layouts[route.layout] : undefined,
		}
	})
}
