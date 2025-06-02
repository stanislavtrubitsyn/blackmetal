import { ReactNode } from 'react'

interface MainLayoutProps {
	children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<div>
			{/* Тут можно добавить Navbar, Sidebar */}
			{children}
		</div>
	)
}

export default MainLayout
