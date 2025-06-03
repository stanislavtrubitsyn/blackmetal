export interface RouteConfig {
	path: string
	component: string
	title: string
	layout?: string
	private?: boolean
}

export interface RoutesConfig {
	[key: string]: RouteConfig
}
