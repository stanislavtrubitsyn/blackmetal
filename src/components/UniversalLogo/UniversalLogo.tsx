import React from 'react'
import { Box, Typography } from '@mui/material'

import { UniversalLogoProps } from './LogoInterface'

const UniversalLogo: React.FC<UniversalLogoProps> = ({
	size,
	type = 'icon',
}) => {
	return (
		<>
			{type === 'icon' ? (
				<Box component='img' src='/isi.jpg' alt='logo' sx={{ height: size }} />
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
							src='/isi.jpg'
							alt='logo'
							sx={{ width: '60px' }}
						/>
						<Typography
							style={{ height: '60px', fontWeight: 'bold', fontSize: '13px' }}
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
