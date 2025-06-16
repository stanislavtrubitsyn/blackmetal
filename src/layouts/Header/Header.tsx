import React, { useState } from 'react'
import { AppBar, Toolbar, Box, IconButton, InputBase, Divider, useTheme } from '@mui/material'
import { UniversalLogo } from '@/components'
import { SocialLinks } from '@/components'
import { NavItem } from './components/NavItem'
import navigationData from './data.json'
import { NavigationData } from './interface'
import { Search } from './components/Search'
import SearchIcon from '@mui/icons-material/Search'
import { BurgerMenu } from './components/BurgerMenu'
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher'

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
				height: { xxs: 'auto', sm: '165px' },
				py: { xxs: 2, sm: 0 },
				borderBottom: `1px solid ${theme.palette.divider}`,
			}}
		>
			<Toolbar
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'space-around',
					maxWidth: 'xxl',
					minWidth: 'xxs',
					width: '90%',
					height: { xxs: 'auto', sm: '140px' },
					gap: { xxs: 2, sm: 0 },
				}}
			>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						width: { xxs: '100%', sm: '98%' },
						flexDirection: { xxs: 'row', sm: 'row' },
						gap: { xxs: 2, sm: 0 },
					}}
				>
					<UniversalLogo type='icon-text' />

					<Box
						sx={{
							display: { xxs: 'none', sm: 'flex' },
							width: '378px',
							height: '50px',
							border: '1px solid #C7C7C7',
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
						<IconButton type='submit' onClick={handleSearchSubmit} sx={{ color: '#C7C7C7' }}>
							<SearchIcon />
						</IconButton>
					</Box>

					<Box sx={{ display: { xxs: 'none', sm: 'flex' } }}>
						{/* <SocialLinks /> */}
						<LanguageSwitcher />
					</Box>

					<BurgerMenu
						navItems={navItems}
						searchQuery={searchQuery}
						onSearchChange={handleSearchChange}
						onSearchSubmit={handleSearchSubmit}
					/>
				</Box>

				<Divider
					sx={{
						width: '98%',
						height: '1px',
						mx: 'auto',
						mt: { xxs: 0, sm: 3 },
						mb: { xxs: 0, sm: 1 },
						display: { xxs: 'none', sm: 'block' },
					}}
				/>

				<Box
					sx={{
						display: { xxs: 'none', sm: 'flex' },
						alignItems: 'center',
						justifyContent: 'space-between',
						flexWrap: 'wrap',
						width: '100%',
						maxWidth: 'xxxl',
						px: 2,
						boxSizing: 'border-box',
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
