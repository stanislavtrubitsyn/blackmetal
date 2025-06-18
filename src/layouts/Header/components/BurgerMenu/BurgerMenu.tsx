// src/layouts/Header/components/BurgerMenu/BurgerMenu.tsx
import { useState } from 'react'
import { Box, IconButton, Drawer, useTheme, Typography, Divider } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { NavItem } from '../NavItem'
import { NavigationData } from '../../interface'
import { SocialLinks } from '@/components'
import { Search } from '../Search'

interface BurgerMenuProps {
	navItems: NavigationData['navItems'] // Используем тип из NavigationData
	searchQuery: string
	onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	onSearchSubmit: (event: React.FormEvent) => void
}

export const BurgerMenu = ({
	navItems,
	searchQuery,
	onSearchChange,
	onSearchSubmit,
}: BurgerMenuProps) => {
	const [open, setOpen] = useState(false)
	const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})
	const theme = useTheme()

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen)
		if (!newOpen) {
			setExpandedItems({})
		}
	}

	const toggleItem = (id: string) => {
		setExpandedItems(prev => ({
			...prev,
			[id]: !prev[id],
		}))
	}

	const renderMobileNavItems = (items: NavigationData['navItems'], level = 0) => {
		return items.map(item => (
			<Box
				key={item.id}
				sx={{
					width: '100%',
					pl: level * 2,
					borderLeft: level > 0 ? `2px solid ${theme.palette.divider}` : 'none',
				}}
			>
				{item.href ? (
					<a
						href={item.href}
						style={{
							textDecoration: 'none',
							width: '100%',
							display: 'block',
						}}
					>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
								width: '100%',
								py: 1.5,
								cursor: 'pointer',
								'&:hover': {
									backgroundColor: 'rgba(0,0,0,0.05)',
								},
							}}
						>
							<Typography
								sx={{
									fontSize: '1.2rem',
									fontWeight: 'bold',
									color: '#373737',
								}}
							>
								{item.label}
							</Typography>
						</Box>
					</a>
				) : (
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							width: '100%',
							py: 1.5,
							cursor: 'pointer',
							'&:hover': {
								backgroundColor: 'rgba(0,0,0,0.05)',
							},
						}}
						onClick={() => item.items?.length && toggleItem(item.id)}
					>
						<Typography
							sx={{
								fontSize: '1.2rem',
								fontWeight: 'bold',
								color: '#373737',
							}}
						>
							{item.label}
						</Typography>
						{item.items?.length && (
							<Typography sx={{ color: '#373737' }}>
								{expandedItems[item.id] ? '−' : '+'}
							</Typography>
						)}
					</Box>
				)}

				{item.items?.length && expandedItems[item.id] && (
					<Box
						sx={{
							width: '100%',
							display: 'flex',
							flexDirection: 'column',
							mb: 2,
						}}
					>
						{renderMobileNavItems(item.items, level + 1)}
					</Box>
				)}
			</Box>
		))
	}

	return (
		<Box sx={{ display: { xxs: 'flex', sm: 'none' }, alignItems: 'center' }}>
			<IconButton onClick={toggleDrawer(true)} sx={{ color: '#373737', ml: 2 }}>
				<MenuIcon fontSize='large' />
			</IconButton>

			<Drawer
				anchor='right'
				open={open}
				onClose={toggleDrawer(false)}
				sx={{
					'& .MuiDrawer-paper': {
						width: '100%',
						maxWidth: '400px',
						backgroundColor: '#fff',
						padding: '20px',
						boxSizing: 'border-box',
					},
				}}
				ModalProps={{
					style: {
						position: 'fixed',
						top: 0,
						right: 0,
						zIndex: theme.zIndex.drawer + 1,
					},
					BackdropProps: {
						style: {
							backgroundColor: 'rgba(0,0,0,0.5)',
						},
					},
				}}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'flex-end',
						mb: 2,
					}}
				>
					<IconButton onClick={toggleDrawer(false)}>
						<CloseIcon fontSize='large' />
					</IconButton>
				</Box>

				<Box
					sx={{
						mb: 3,
						width: '100%',
						position: 'relative',
					}}
				>
					<Search
						searchQuery={searchQuery}
						onSearchChange={onSearchChange}
						onSearchSubmit={onSearchSubmit}
					/>
				</Box>

				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: '10px',
						mb: 3,
					}}
				>
					{renderMobileNavItems(navItems)}
				</Box>

				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						mt: 'auto',
						mb: 4,
						pt: 2,
					}}
				>
					<SocialLinks />
				</Box>
			</Drawer>
		</Box>
	)
}
