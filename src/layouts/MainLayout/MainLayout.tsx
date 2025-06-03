import { ReactNode } from 'react'
import { Header } from '@/layouts'

import { Footer } from '@/layouts'

interface MainLayoutProps {
	children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	)
}

export default MainLayout
