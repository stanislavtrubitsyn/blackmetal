import React from 'react'
import { Button, MenuItem, Typography, Box, Fade } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { NavItem as NavItemType } from '../../interface'
import { DropdownMenu, NestedDropdownMenu, LineDivider } from '../'

interface NavItemProps {
	item: NavItemType
	level?: number
	hoveredItem: string | null
	hoveredSubItem: string | null
	onMouseEnter: (id: string) => void
	onMouseLeave: () => void
	onSubItemMouseEnter: (id: string) => void
	onSubItemMouseLeave: () => void
}

export const NavItem = ({
	item,
	level = 0,
	hoveredItem,
	hoveredSubItem,
	onMouseEnter,
	onMouseLeave,
	onSubItemMouseEnter,
	onSubItemMouseLeave,
}: NavItemProps) => {
	if (item.href) {
		return (
			<Button
				key={item.id}
				href={item.href}
				sx={{
					overflow: 'hidden',
					textOverflow: 'ellipsis',
					whiteSpace: 'nowrap',
					maxWidth: '100%',
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
				onMouseEnter={() => onMouseEnter(item.id)}
				onMouseLeave={onMouseLeave}
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
										onMouseEnter={() => onSubItemMouseEnter(subItem.id)}
										onMouseLeave={onSubItemMouseLeave}
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
													maxWidth: '100%',
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
																	maxWidth: '100%',
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
												maxWidth: '100%',
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
