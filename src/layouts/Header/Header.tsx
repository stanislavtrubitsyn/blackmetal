import React, { useState } from 'react'
import {
	AppBar,
	Toolbar,
	Box,
	Button,
	Menu,
	MenuItem,
	Typography,
	InputBase,
	IconButton,
	styled,
	alpha,
	useTheme,
	Divider,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { NavItem, NavigationData } from './interface'
import navigationData from './data.json'
import logo from '../../../public/isi.jpg'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import XIcon from '@mui/icons-material/X'
import RssFeedIcon from '@mui/icons-material/RssFeed'

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: 0,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
}))

const LineDivider = () => (
	<Box
		sx={{
			width: '90%',
			height: '1px',
			backgroundColor: '#e0e0e0',
			mx: 'auto',
			my: 0,
		}}
	/>
)

const Header = () => {
	const theme = useTheme()
	const { navItems } = navigationData as NavigationData
	const [anchorEls, setAnchorEls] = useState<Record<string, HTMLElement | null>>({})
	const [searchQuery, setSearchQuery] = useState('')

	const handleOpenMenu = (id: string, event: React.MouseEvent<HTMLElement>) => {
		setAnchorEls(prev => ({ ...prev, [id]: event.currentTarget }))
	}

	const handleCloseMenu = (id: string) => {
		setAnchorEls(prev => ({ ...prev, [id]: null }))
	}

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value)
	}

	const handleSearchSubmit = (event: React.FormEvent) => {
		event.preventDefault()
		// Здесь можно добавить логику поиска
		console.log('Search query:', searchQuery)
	}

	const renderNavItem = (item: NavItem, level = 0) => {
		if (item.href) {
			return (
				<Button
					key={item.id}
					href={item.href}
					sx={{
						color: '#373737',
						textTransform: 'none',
						fontSize: '1rem',
						fontWeight: 'bold',
						borderRadius: 0,
						px: 2,
						'&:hover': {
							color: '#2D7A84',
							backgroundColor: 'transparent',
						},
					}}
				>
					{item.label}
				</Button>
			)
		}

		if (item.items?.length) {
			const isOpen = Boolean(anchorEls[item.id])

			return (
				<Box key={item.id} sx={{ position: 'relative' }}>
					<Button
						aria-controls={isOpen ? item.id : undefined}
						aria-haspopup='true'
						onClick={e => handleOpenMenu(item.id, e)}
						sx={{
							color: isOpen ? '#2D7A84' : '#373737',
							textTransform: 'none',
							fontSize: '1rem',
							fontWeight: 'bold',
							borderRadius: 0,
							px: 2,
							'&:hover': {
								color: '#2D7A84',
								backgroundColor: 'transparent',
							},
						}}
					>
						{item.label}
					</Button>

					<Menu
						id={item.id}
						anchorEl={anchorEls[item.id]}
						open={isOpen}
						onClose={() => handleCloseMenu(item.id)}
						anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
						transformOrigin={{ vertical: 'top', horizontal: 'left' }}
						PaperProps={{
							sx: {
								borderRadius: 0,
								boxShadow: theme.shadows[4],
								minWidth: '220px',
								maxWidth: '260px',
								mt: 0,
								py: 0,
							},
						}}
						MenuListProps={{ disablePadding: true }} // ← ЭТО ОЧЕНЬ ВАЖНО
					>
						{item.items.map((subItem, index, arr) => (
							<React.Fragment key={subItem.id}>
								{subItem.items?.length ? (
									<MenuItem
										sx={{
											position: 'relative',
											p: 0,
											height: '50px',
											'&:hover': {
												backgroundColor: '#4DC3D3',
												color: '#fff',
											},
										}}
									>
										<Box
											sx={{
												display: 'flex',
												justifyContent: 'space-between',
												alignItems: 'center',
												width: '100%',
												height: '100%',
												px: 2,
											}}
											onClick={e => {
												e.stopPropagation()
												handleOpenMenu(subItem.id, e as React.MouseEvent<HTMLElement>)
											}}
										>
											<Typography fontWeight='bold'>{subItem.label}</Typography>
											<KeyboardArrowRightIcon fontSize='small' />
										</Box>

										<Menu
											id={subItem.id}
											anchorEl={anchorEls[subItem.id]}
											open={Boolean(anchorEls[subItem.id])}
											onClose={() => handleCloseMenu(subItem.id)}
											anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
											transformOrigin={{ vertical: 'top', horizontal: 'left' }}
											sx={{
												'& .MuiPaper-root': {
													ml: 0,
													mt: '-8px',
													borderRadius: 0,
												},
											}}
											PaperProps={{
												sx: {
													borderRadius: 0,
													boxShadow: theme.shadows[4],
													minWidth: '240px',
													py: 0,
												},
											}}
											MenuListProps={{ disablePadding: true }} // ← Вот здесь тоже!
										>
											{subItem.items.map((nestedItem, nestedIndex, nestedArr) => (
												<React.Fragment key={nestedItem.id}>
													<MenuItem
														component='a'
														href={nestedItem.href}
														onClick={() => {
															handleCloseMenu(item.id)
															handleCloseMenu(subItem.id)
														}}
														sx={{
															height: '50px',
															py: 0,
															'&:hover': {
																backgroundColor: '#4DC3D3',
																color: '#fff',
															},
														}}
													>
														<Typography fontWeight='bold'>{nestedItem.label}</Typography>
													</MenuItem>
													{nestedIndex < nestedArr.length - 1 && <LineDivider />}
												</React.Fragment>
											))}
										</Menu>
									</MenuItem>
								) : (
									<MenuItem
										component='a'
										href={subItem.href}
										onClick={() => handleCloseMenu(item.id)}
										sx={{
											height: '50px',
											'&:hover': {
												backgroundColor: '#4DC3D3',
												color: '#fff',
											},
										}}
									>
										<Typography fontWeight='bold'>{subItem.label}</Typography>
									</MenuItem>
								)}
								{index < arr.length - 1 && <LineDivider />}
							</React.Fragment>
						))}
					</Menu>
				</Box>
			)
		}

		return null
	}

	return (
		<AppBar
			position='static'
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: '#ffff',
				color: 'text.primary',
				boxShadow: 'none',
				maxWidth: '1920px',
				height: '165px',
				borderBottom: `1px solid ${theme.palette.divider}`,
			}}
		>
			<Toolbar
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'space-around',
					height: '140px',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						width: '1285px',
					}}
				>
					{/* Logo */}
					<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px' }}>
						<img src={logo} alt='logo' style={{ width: '60px' }} />
						<Typography style={{ height: '60px', fontWeight: 'bold', fontSize: '13px' }}>
							Інститут чорної металургії <br /> ім. З.І. Некрасова <br />
							Національної академії наук України
						</Typography>
					</Box>

					{/* Search Box */}
					<Box
						component='form'
						onSubmit={handleSearchSubmit}
						sx={{
							width: '378px',
							height: '50px',
							border: '1px solid #C7C7C7',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							pl: '20px',
							pr: '10px',
						}}
					>
						<InputBase
							placeholder='Пошук по сайту'
							value={searchQuery}
							onChange={handleSearchChange}
							sx={{
								width: '100%',
								color: '#373737',
								'& .MuiInputBase-input': {
									padding: '8px 0',
								},
							}}
						/>
						<IconButton type='submit' sx={{ color: '#C7C7C7' }}>
							<SearchIcon />
						</IconButton>
					</Box>

					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'center',
							gap: '15px',
						}}
					>
						<InstagramIcon style={{ color: '#2D7A84' }} fontSize='medium' />{' '}
						<FacebookIcon style={{ color: '#E3E3E3' }} fontSize='medium' />
						<XIcon style={{ color: '#E3E3E3' }} fontSize='medium' />{' '}
						<RssFeedIcon style={{ color: '#E3E3E3' }} fontSize='medium' />
					</Box>
				</Box>
				<Divider
					sx={{
						width: '1295px',
						height: '1px',
						mx: 'auto',
						mt: 3,
						mb: 1,
					}}
				/>

				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						width: '1310px',
					}}
				>
					{navItems.map(item => renderNavItem(item))}
				</Box>
			</Toolbar>
		</AppBar>
	)
}

export default Header
