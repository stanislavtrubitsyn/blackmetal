import { ReactNode } from 'react'
import { Header } from '@/layouts'

import { Footer } from '@/layouts'
import { Box } from '@mui/material'

interface MainLayoutProps {
	children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<div>
			<Header />
			<Box sx={{ maxWidth: '1920px', width: '100%', m: '0px auto' }}>
				{children}
			</Box>
			<Footer />
		</div>
	)
}

export default MainLayout
