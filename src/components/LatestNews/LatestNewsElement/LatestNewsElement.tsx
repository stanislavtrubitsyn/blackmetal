import { Box, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'

interface LatestNewsElementProps {
	title: string
	description: string
	image: string
	link: string
}

const lineClampStyles = {
	display: '-webkit-box',
	WebkitBoxOrient: 'vertical',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
}

const LatestNewsElement: React.FC<LatestNewsElementProps> = ({
	title,
	description,
	image,
	link,
}) => {
	return (
		<Box sx={{ width: 250, display: 'flex', flexDirection: 'column', gap: 1 }}>
			<Box
				sx={{
					width: 250,
					height: 145,
					backgroundImage: `url(${image})`,
					backgroundSize: 'contain',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					position: 'relative',
					overflow: 'hidden',
					'&:hover .overlay': { opacity: 1 },
					backgroundColor: '#fff',
				}}
			>
				<Box
					className='overlay'
					sx={{
						position: 'absolute',
						inset: 0,
						backgroundColor: 'rgba(20, 41, 52, 0.8)',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						opacity: 0,
						transition: 'opacity 0.3s ease-in-out',
					}}
				>
					<Button
						component={Link}
						to={link}
						variant='outlined'
						sx={{
							color: '#fff',
							borderColor: '#fff',
							textTransform: 'none',
							fontSize: 14,
							padding: '4px 16px',
						}}
					>
						Детальніше
					</Button>
				</Box>
			</Box>

			<Typography
				fontWeight={700}
				fontSize={19}
				component={Link}
				to={link}
				sx={{
					...lineClampStyles,
					WebkitLineClamp: 2,
					color: '#2D7A84',
					textDecoration: 'none',
				}}
			>
				{title}
			</Typography>

			<Typography
				fontSize={16}
				sx={{
					...lineClampStyles,
					WebkitLineClamp: 2,
				}}
			>
				{description}
			</Typography>
		</Box>
	)
}

export default LatestNewsElement
