import React from 'react'
import { Box, Typography } from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom'
import { UniversalLogoProps } from './LogoInterface'

const UniversalLogo: React.FC<UniversalLogoProps> = ({ size, type = 'icon' }) => {
	const navigate = useNavigate()
	const location = useLocation()

	const handleLogoClick = () => {
		if (location.pathname === '/') {
			// Если уже на главной - плавный скролл наверх
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
		} else {
			// Если не на главной - переход на главную
			navigate('/')
		}
	}

	return (
		<Box
			onClick={handleLogoClick}
			sx={{
				cursor: 'pointer',
				display: 'inline-block',
				'&:hover': {
					opacity: 0.8,
					transition: 'opacity 0.2s ease',
				},
			}}
		>
			{type === 'icon' ? (
				<Box
					component='img'
					src='/blackmetal/isi.jpg'
					alt='logo'
					sx={{
						height: size,
						display: 'block',
					}}
				/>
			) : (
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						gap: '7px',
					}}
				>
					<Box
						component='img'
						src='/blackmetal/isi.jpg'
						alt='logo'
						sx={{
							width: { xxs: '40px', sm: '60px' },
						}}
					/>
					<Typography
						sx={{
							fontWeight: 'bold',
							fontSize: { xxs: '10px', sm: '13px' },
							lineHeight: 1.2,
							maxWidth: { xxs: '180px', sm: '100%' },
						}}
					>
						Інститут чорної металургії <br /> ім. З.І. Некрасова <br />
						Національної академії наук України
					</Typography>
				</Box>
			)}
		</Box>
	)
}

export default UniversalLogo
