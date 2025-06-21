import { ReactNode } from 'react'
import { Header } from '@/layouts'
import { Footer } from '@/layouts'
import { Box, useTheme, useMediaQuery } from '@mui/material'
import LatestNews from '@/components/LatestNews'
import { useLocation } from 'react-router-dom'
import routes from '@/router/routes.json'

interface MainLayoutProps {
	children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
	const { pathname } = useLocation()
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

	const showLatest = pathname !== routes.HomePage.path && pathname !== routes.ContactsPage.path

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
			<Header />
			<Box
				component='main'
				sx={{ 
					display: 'flex', 
					flex: 1, 
					width: '100%', 
					m: '0 auto',
					flexDirection: isMobile ? 'column-reverse' : 'row'
				}}
			>
				{showLatest && <LatestNews />}
				<Box sx={{ flex: 1 }}>{children}</Box>
			</Box>
			<Footer />
		</Box>
	)
}

export default MainLayout
