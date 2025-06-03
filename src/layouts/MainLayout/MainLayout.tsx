import { ReactNode } from 'react'
import { Header } from '@/layouts/Header'
interface MainLayoutProps {
	children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<div>
			<Header />
			{/* Тут можно добавить Navbar, Sidebar */}
			{children}
		</div>
	)
}

export default MainLayout
