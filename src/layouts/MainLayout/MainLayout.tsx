import { ReactNode } from 'react'
import { Header } from '@/layouts'
import { Footer } from '@/layouts'
import { Box } from '@mui/material'

interface MainLayoutProps {
	children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				minHeight: '100vh',
			}}
		>
			<Header />
			<Box
				component='main'
				sx={{
					flex: 1,
					maxWidth: '1920px',
					width: '100%',
					m: '0 auto',
				}}
			>
				{children}
			</Box>
			<Footer />
		</Box>
	)
}

export default MainLayout