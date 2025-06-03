import React, { useState } from 'react'
import {
	AppBar,
	Toolbar,
	Box,
	Button,
	MenuItem,
	Typography,
	InputBase,
	IconButton,
	styled,
	alpha,
	useTheme,
	Divider,
	Collapse,
	Fade,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { NavItem, NavigationData } from './interface'
import navigationData from './data.json'

import { UniversalLogo } from '@/components'
import SocialLinks from '../../components/SocialLinks/SocialLinks'

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

const DropdownMenu = styled(Box)({
	position: 'absolute',
	top: '100%',
	left: 0,
	zIndex: 1,
	backgroundColor: '#fff',
	boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
	minWidth: '220px',
	maxWidth: '260px',
})

const NestedDropdownMenu = styled(Box)({
	position: 'absolute',
	top: 0,
	left: '100%',
	zIndex: 1,
	backgroundColor: '#fff',
	boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
	minWidth: '240px',
})

const Header = () => {
	const theme = useTheme()
	const { navItems } = navigationData as NavigationData
	const [hoveredItem, setHoveredItem] = useState<string | null>(null)
	const [hoveredSubItem, setHoveredSubItem] = useState<string | null>(null)
	const [searchQuery, setSearchQuery] = useState('')

	const handleMouseEnter = (id: string) => {
		setHoveredItem(id)
	}

	const handleMouseLeave = () => {
		setHoveredItem(null)
		setHoveredSubItem(null)
	}

	const handleSubItemMouseEnter = (id: string) => {
		setHoveredSubItem(id)
	}

	const handleSubItemMouseLeave = () => {
		setHoveredSubItem(null)
	}

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value)
	}

	const handleSearchSubmit = (event: React.FormEvent) => {
		event.preventDefault()
		console.log('Search query:', searchQuery)
	}

	const renderNavItem = (item: NavItem, level = 0) => {
		if (item.href) {
			return (
				<Button
					key={item.id}
					href={item.href}
					sx={{
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						whiteSpace: 'nowrap',
						maxWidth: '100%', // важно
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
			const isOpen = hoveredItem === item.id

			return (
				<Box
					key={item.id}
					sx={{ position: 'relative' }}
					onMouseEnter={() => handleMouseEnter(item.id)}
					onMouseLeave={handleMouseLeave}
				>
					<Button
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

					<Fade in={isOpen} timeout={300}>
						<DropdownMenu>
							{item.items.map((subItem, index, arr) => (
								<React.Fragment key={subItem.id}>
									{subItem.items?.length ? (
										<Box
											sx={{
												position: 'relative',
												'&:hover': {
													backgroundColor: '#4DC3D3',
													color: '#fff',
												},
											}}
											onMouseEnter={() => handleSubItemMouseEnter(subItem.id)}
											onMouseLeave={handleSubItemMouseLeave}
										>
											<Box
												sx={{
													display: 'flex',
													justifyContent: 'space-between',
													alignItems: 'center',
													width: '100%',
													height: '50px',
													px: 2,
												}}
											>
												<Typography
													fontWeight='bold'
													sx={{
														overflow: 'hidden',
														textOverflow: 'ellipsis',
														whiteSpace: 'nowrap',
														maxWidth: '100%', // важно
													}}
												>
													{subItem.label}
												</Typography>
												<KeyboardArrowRightIcon fontSize='small' />
											</Box>

											<Fade in={hoveredSubItem === subItem.id} timeout={300}>
												<NestedDropdownMenu>
													{subItem.items.map((nestedItem, nestedIndex, nestedArr) => (
														<React.Fragment key={nestedItem.id}>
															<MenuItem
																component='a'
																href={nestedItem.href}
																sx={{
																	height: '50px',
																	py: 0,
																	color: '#373737',
																	'&:hover': {
																		backgroundColor: '#4DC3D3',
																		color: '#fff',
																	},
																}}
															>
																<Typography
																	fontWeight='bold'
																	sx={{
																		overflow: 'hidden',
																		textOverflow: 'ellipsis',
																		whiteSpace: 'nowrap',
																		maxWidth: '100%', // важно
																	}}
																>
																	{nestedItem.label}
																</Typography>
															</MenuItem>
															{nestedIndex < nestedArr.length - 1 && <LineDivider />}
														</React.Fragment>
													))}
												</NestedDropdownMenu>
											</Fade>
										</Box>
									) : (
										<MenuItem
											component='a'
											href={subItem.href}
											sx={{
												height: '50px',
												color: '#373737',
												'&:hover': {
													backgroundColor: '#4DC3D3',
													color: '#fff',
												},
											}}
										>
											<Typography
												fontWeight='bold'
												sx={{
													overflow: 'hidden',
													textOverflow: 'ellipsis',
													whiteSpace: 'nowrap',
													maxWidth: '100%', // важно
												}}
											>
												{subItem.label}
											</Typography>
										</MenuItem>
									)}
									{index < arr.length - 1 && <LineDivider />}
								</React.Fragment>
							))}
						</DropdownMenu>
					</Fade>
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
					<UniversalLogo type='icon-text' />

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

					<SocialLinks />
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
