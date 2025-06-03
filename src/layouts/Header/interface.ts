export interface NavItem {
	id: string
	label: string
	href?: string
	items: NavItem[]
	icon?: React.ReactNode // Добавим возможность указывать иконку
}

export interface NavigationData {
	navItems: NavItem[]
}
