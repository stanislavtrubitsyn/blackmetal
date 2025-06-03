import React from 'react'
import {
	Box,
	List,
	ListItem,
	Typography,
	Link as MUILink,
	Divider,
	Button,
} from '@mui/material'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import InstagramIcon from '@mui/icons-material/Instagram'
import XIcon from '@mui/icons-material/X'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { Link } from 'react-router-dom'
const Footer = () => {
	const listItemStyle = {
		width: 'fit-content',
		minWidth: 'unset',
		p: 0,
		display: 'flex',
		justifyContent: 'center',
		whiteSpace: 'nowrap',
		color: '#333333',
		textDecoration: 'none',
		transition: 'color 0.3s ease',
		'&:hover': {
			color: '#89dfeb',
		},
	}
	const listTypographyStyle = { fontSize: '15px', fontWeight: 400 }
	const iconsStyle = {
		width: '28px',
		height: '28px',
		color: '#E4E4E4',
		transition: 'color 0.3s ease',
		'&:hover': {
			color: '#89dfeb',
		},
	}
	return (
		<Box
			sx={{
				width: '1440px',
				minHeight: '271px',
				px: '190px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				bgcolor: '#ffffff',
			}}
		>
			<List sx={{ display: 'flex', gap: '60px', p: 0, pt: '20px' }}>
				<ListItem component={Link} to='/services' sx={listItemStyle}>
					<Typography sx={listTypographyStyle}>Сервіси</Typography>
				</ListItem>
				<ListItem component={Link} to='/repository' sx={listItemStyle}>
					<Typography sx={listTypographyStyle}>Репозиторій</Typography>
				</ListItem>
				<ListItem component={Link} to='/remote-education' sx={listItemStyle}>
					<Typography sx={listTypographyStyle}>Дистанційна освіта</Typography>
				</ListItem>
				<ListItem component={Link} to='/applicant' sx={listItemStyle}>
					<Typography sx={listTypographyStyle}>Абітурієнту</Typography>
				</ListItem>
				<ListItem component={Link} to='/entrant' sx={listItemStyle}>
					<Typography sx={listTypographyStyle}>Вступнику</Typography>
				</ListItem>
				<ListItem component={Link} to='/library' sx={listItemStyle}>
					<Typography sx={listTypographyStyle}>Бібліотека</Typography>
				</ListItem>
			</List>
			<Divider
				sx={{
					width: '100%',
					borderColor: '#D2D2D2',
					borderBottomWidth: '1px',
					mt: 2,
				}}
			/>
			<Box
				sx={{
					mt: '25px',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					gap: '70px',
				}}
			>
				<Box>
					<Box component='img' src='/isi.jpg' sx={{ height: '54px' }} />
					<MUILink href='' target='_blank' rel='noopener noreferrer'>
						<Typography sx={{ fontSize: '12px' }}>Карта сайта</Typography>
					</MUILink>
					<Typography sx={{ fontSize: '12px' }}>© 2006-2019 О сайте</Typography>
				</Box>
				<Box>
					<Box
						sx={{
							height: '54px',
							display: 'flex',
							alignItems: 'center',
							mb: '5px',
						}}
					>
						<Typography
							sx={{ fontSize: '15px', fontWeight: 700, color: '#363636' }}
						>
							МІСЦЕ ЗНАХОДЖЕННЯ
						</Typography>
					</Box>

					<Typography
						sx={{ fontSize: '15px', fontWeight: 400, color: '#606060' }}
					>
						Дніпро, проспект Дмитра
					</Typography>
					<Typography
						sx={{ fontSize: '15px', fontWeight: 400, color: '#606060' }}
					>
						Яворницького, 19
					</Typography>
				</Box>
				<Box>
					<Box
						sx={{
							height: '54px',
							display: 'flex',
							alignItems: 'center',
							mb: '5px',
						}}
					>
						<Typography
							sx={{ fontSize: '15px', fontWeight: 700, color: '#363636' }}
						>
							КОНТАКТИ
						</Typography>
					</Box>

					<Typography
						sx={{ fontSize: '15px', fontWeight: 400, color: '#333333' }}
					>
						+38 096 786 77 77
					</Typography>
					<Typography
						sx={{ fontSize: '15px', fontWeight: 400, color: '#333333' }}
					>
						ntu@gmail.com
					</Typography>
				</Box>
				<Box>
					<Box
						sx={{
							height: '54px',
							display: 'flex',
							alignItems: 'center',
							mb: '5px',
						}}
					>
						<Typography
							sx={{ fontSize: '15px', fontWeight: 700, color: '#363636' }}
						>
							ЗАДАТИ ПИТАННЯ
						</Typography>
					</Box>
					<Button
						variant='outlined'
						sx={{
							width: '186px',
							borderRadius: 0,
							textTransform: 'none',
							borderColor: '#333333',
							fontSize: '14px',
							fontWeight: 400,
							color: '#333333',
						}}
					>
						Зворотній зв'язок
					</Button>
				</Box>
				<Box>
					<Box
						sx={{
							height: '54px',
							display: 'flex',
							alignItems: 'center',
							mb: '5px',
						}}
					>
						<Typography
							sx={{ fontSize: '15px', fontWeight: 700, color: '#363636' }}
						>
							СОЦ.МЕРЕЖІ
						</Typography>
					</Box>
					<Box sx={{ display: 'flex', gap: '10px' }}>
						<MUILink href='' target='_blank' rel='noopener noreferrer'>
							<FacebookRoundedIcon sx={iconsStyle} />
						</MUILink>
						<MUILink href='' target='_blank' rel='noopener noreferrer'>
							<InstagramIcon sx={iconsStyle} />
						</MUILink>
						<MUILink href='' target='_blank' rel='noopener noreferrer'>
							<XIcon sx={iconsStyle} />
						</MUILink>
						<MUILink href='' target='_blank' rel='noopener noreferrer'>
							<YouTubeIcon sx={iconsStyle} />
						</MUILink>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

export default Footer
