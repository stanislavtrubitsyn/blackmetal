// src/layouts/Header/interface.ts
export interface NavItem {
	id: string
	label: string
	href?: string
	items?: NavItem[]
	icon?: React.ReactNode
}

export interface NavigationData {
	navItems: NavItem[]
}
