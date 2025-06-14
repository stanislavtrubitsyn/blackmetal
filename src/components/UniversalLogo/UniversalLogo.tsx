import React from 'react'
import { Box, Typography } from '@mui/material'

import { UniversalLogoProps } from './LogoInterface'

const UniversalLogo: React.FC<UniversalLogoProps> = ({ size, type = 'icon' }) => {
	return (
		<>
			{type === 'icon' ? (
				<Box component='img' src='/blackmetal/isi.jpg' alt='logo' sx={{ height: size }} />
			) : (
				<>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							gap: '7px',
						}}
					>
						<Box
							component='img'
							src='/blackmetal/isi.jpg'
							alt='logo'
							sx={{
								width: { xxs: '40px', sm: '60px' },
							}}
						/>
						<Typography
							sx={{
								fontWeight: 'bold',
								fontSize: { xxs: '10px', sm: '13px' },
								lineHeight: 1.2,
								maxWidth: { xxs: '180px', sm: '100%' },
							}}
						>
							Інститут чорної металургії <br /> ім. З.І. Некрасова <br />
							Національної академії наук України
						</Typography>
					</Box>
				</>
			)}
		</>
	)
}

export default UniversalLogo
