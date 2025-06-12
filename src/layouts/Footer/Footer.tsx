import {
	Box,
	List,
	ListItem,
	Typography,
	Link as MUILink,
	Divider,
	Button,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { SocialLinks, UniversalLogo } from '@/components'
import routes from '@/router/routes.json'
import { RouteConfig, RoutesConfig } from '@/router/types'

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
			color: '#2D7A84',
		},
	}

	const listTypographyStyle = { fontSize: '15px', fontWeight: 400 }
	const titleStyles = { fontSize: '15px', fontWeight: 700, color: '#363636' }
	const boxStyles = {
		height: '54px',
		display: 'flex',
		alignItems: 'center',
		mb: '5px',
	}

	// Приводим routes к типу RoutesConfig и фильтруем
	const footerLinks = Object.values(routes as RoutesConfig).filter(
		(route): route is RouteConfig & { showIn: string } =>
			route.showIn === 'Footer'
	)

	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				minHeight: '271px',
				px: { xxs: '20px', xl: '190px' },
				pb: '20px',
				bgcolor: '#ffffff',
			}}
		>
			<Box
				sx={{
					maxWidth: 'xxl',
					minWidth: 'xxs',
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<List
					sx={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: { xxs: 'center', lg: 'space-between' },
						columnGap: { xxs: '60px', lg: '0px' },
						rowGap: '10px',
						flexWrap: 'wrap',
						width: '80%',
						p: 0,
						pt: '20px',
					}}
				>
					{footerLinks.map(link => (
						<ListItem
							key={link.path}
							component={Link}
							to={link.path}
							sx={listItemStyle}
						>
							<Typography sx={listTypographyStyle}>{link.title}</Typography>
						</ListItem>
					))}
				</List>
				<Divider
					sx={{
						width: '100%',
						maxWidth: 'xxxl',
						minWidth: 'xxs',
						borderColor: '#D2D2D2',
						borderBottomWidth: '1px',
						mt: 2,
					}}
				/>
				<Box
					sx={{
						width: '95%',
						mt: '25px',
						px: { xxs: '20px', lg: '0px' },
						display: 'flex',
						flexDirection: 'row-reverse',
						justifyContent: { xxs: 'center', lg: 'space-between' },
						columnGap: { xxs: '60px', lg: '0px' },
						rowGap: '15px',
						alignItems: 'center',
						flexWrap: 'wrap',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Box sx={boxStyles}>
							<Typography sx={titleStyles}>СОЦ.МЕРЕЖІ</Typography>
						</Box>
						<SocialLinks />
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Box sx={boxStyles}>
							<Typography sx={titleStyles}>ЗАДАТИ ПИТАННЯ</Typography>
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
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Box sx={boxStyles}>
							<Typography sx={titleStyles}>КОНТАКТИ</Typography>
						</Box>
						<Typography
							sx={{
								fontSize: '15px',
								fontWeight: 400,
								color: '#333333',
								textAlign: 'center',
							}}
						>
							+38 096 786 77 77 <br /> ntu@gmail.com
						</Typography>
					</Box>

					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Box sx={boxStyles}>
							<Typography sx={titleStyles}>МІСЦЕ ЗНАХОДЖЕННЯ</Typography>
						</Box>
						<Typography
							sx={{
								mb: '10px',
								fontSize: '15px',
								fontWeight: 400,
								color: '#606060',
								textAlign: 'center',
							}}
						>
							Дніпро, проспект Дмитра <br /> Яворницького, 19
						</Typography>
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<UniversalLogo size={54} />
						<MUILink href='' target='_blank' rel='noopener noreferrer'>
							<Typography sx={{ fontSize: '12px' }}>Мапа сайту</Typography>
						</MUILink>
						<Typography sx={{ fontSize: '12px' }}>
							© 2006-2019 О сайте
						</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

export default Footer
