import { getRoutes, RouteType } from '@/router/routeConfig'
import { create } from 'zustand'

interface RouteStore {
	routes: RouteType[]
	loadRoutes: () => Promise<void>
}

export const useRouteStore = create<RouteStore>(set => ({
	routes: [],
	loadRoutes: async () => {
		const fetchedRoutes = await getRoutes()
		set({ routes: fetchedRoutes })
	},
}))
