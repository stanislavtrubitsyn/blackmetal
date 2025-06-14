import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

interface DepartmentElementProps {
	shortName: string
	fullName: string
	img: string
	href: string
}

const DepartmentElement: React.FC<DepartmentElementProps> = ({
	shortName,
	fullName,
	img,
	href,
}) => {
	return (
		<Box
			component={Link}
			to={href}
			sx={{
				width: '460px',
				height: '145px',
				display: 'flex',
				alignItems: 'center',
				// justifyContent: 'center',
				flexDirection: 'row',
				gap: '20px',
				backgroundColor: '#fff',
				boxShadow: '0px 5px 100px 0px rgba(0, 0, 0, 0.15)',
				textDecoration: 'none',
				'&:hover .svg-logo': {
					filter:
						'brightness(0) saturate(100%) invert(30%) sepia(15%) saturate(1826%) hue-rotate(147deg) brightness(94%) contrast(87%)',
				},
			}}
		>
			<Box
				sx={{
					width: '80px important!',
					height: '80px important!',
					ml: 2,
					display: 'flex',
					alignItems: 'center',
					// justifyContent: 'center',
				}}
			>
				<Box
					component='img'
					src={img}
					alt={shortName}
					className='svg-logo'
					sx={{
						filter:
							'brightness(0) saturate(100%) invert(91%) sepia(0%) saturate(5%) hue-rotate(163deg) brightness(91%) contrast(88%)',
						transition: 'filter 0.3s ease-in-out',
					}}
				/>
			</Box>
			<Box sx={{ mr: 2 }}>
				<Box sx={{ fontSize: '21px', color: '#2D7A84', fontWeight: 'bold' }}>{shortName}</Box>
				<Box sx={{ fontSize: '17px', color: 'black' }}>{fullName}</Box>
			</Box>
		</Box>
	)
}

export default DepartmentElement
