import React, { useState } from 'react'
import { AppBar, Toolbar, Box, IconButton, InputBase, Divider, useTheme } from '@mui/material'
import { UniversalLogo } from '@/components'
import { SocialLinks } from '@/components'
import { NavItem } from './components/NavItem'
import navigationData from './data.json'
import { NavigationData } from './interface'
import { Search } from './components/Search'
import SearchIcon from '@mui/icons-material/Search'
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
		// console.log('Search query:', searchQuery)
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
				width: '100%',

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
					maxWidth: 'ххl',
					minWidth: 'xxs',
					height: '140px',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						width: '98%',
					}}
				>
					<UniversalLogo type='icon-text' />

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
						width: '98%',
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
					{navItems.map(item => (
						<NavItem
							key={item.id}
							item={item}
							hoveredItem={hoveredItem}
							hoveredSubItem={hoveredSubItem}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
							onSubItemMouseEnter={handleSubItemMouseEnter}
							onSubItemMouseLeave={handleSubItemMouseLeave}
						/>
					))}
				</Box>
			</Toolbar>
		</AppBar>
	)
}

export default Header
