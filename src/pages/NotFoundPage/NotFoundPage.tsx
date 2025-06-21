import { Typography, Box, Container, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import backgroundImage from '../../assets/images/1.jpg'

const NotFoundPage = () => {
	const { t } = useTranslation()

	return (
		<Box
			sx={{
				height: '100vh',
				width: '100vw',
				backgroundImage: `url(${backgroundImage})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				position: 'relative',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				overflow: 'hidden',
				'&::before': {
					content: '""',
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					backgroundColor: 'rgba(20, 41, 52, 0.8)',
					zIndex: 1,
				},
			}}
		>
			<Container
				sx={{
					position: 'relative',
					zIndex: 2,
					textAlign: 'center',
					color: '#fff',
					backdropFilter: 'blur(10px)',
					backgroundColor: 'rgba(255, 255, 255, 0.1)',
					borderRadius: '20px',
					padding: '40px',
					border: '1px solid rgba(255, 255, 255, 0.2)',
					boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
					maxWidth: '300px',
					width: '30%',
				}}
			>
				<Typography 
					variant='h1' 
					sx={{ 
						fontSize: { xs: '3rem', sm: '4rem', md: '6rem' },
						fontWeight: 700,
						mb: 2,
						textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
					}}
				>
					404
				</Typography>
				<Typography 
					variant='h4' 
					sx={{ 
						fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
						fontWeight: 500,
						mb: 3,
						textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
					}}
				>
					{t('notFound.title')}
				</Typography>
				<Button
					component={Link}
					to="/"
					variant="contained"
					sx={{
						backgroundColor: 'rgba(255, 255, 255, 0.2)',
						color: '#fff',
						border: '1px solid rgba(255, 255, 255, 0.3)',
						padding: '12px 24px',
						fontSize: '1.1rem',
						fontWeight: 500,
						textTransform: 'none',
						borderRadius: '10px',
						backdropFilter: 'blur(10px)',
						'&:hover': {
							backgroundColor: 'rgba(255, 255, 255, 0.3)',
							border: '1px solid rgba(255, 255, 255, 0.5)',
							transform: 'translateY(-2px)',
							boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
						},
						transition: 'all 0.3s ease',
					}}
				>
					{t('notFound.backButton')}
				</Button>
			</Container>
		</Box>
	)
}

export default NotFoundPage
