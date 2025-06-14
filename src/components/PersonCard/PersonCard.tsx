import { Box, Typography } from '@mui/material'
import data from './data.json'

const PersonCard = () => {
	return (
		<Box
			sx={{
				width: '589px',
				height: '342px',
				display: 'flex',
				bgcolor: '#FFFFFF',
			}}
		>
			<Box
				sx={{
					height: '100%',
					width: '43%',
					backgroundImage: `url(${data.photo})`,
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
				}}
			/>
			<Box
				sx={{
					width: '57%',
					px: '30px',
					py: '30px',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<Typography
					sx={{ fontSize: '14px', fontWeight: 400, color: '#8A8A8A' }}
				>
					{data.position}
				</Typography>

				<Typography
					sx={{ mt: '13px', fontSize: '22px', fontWeight: 700, lineHeight: 1 }}
				>
					{data.name}
				</Typography>

				<Typography
					sx={{
						mt: '10px',
						fontSize: '13px',
						fontWeight: 400,
						color: '#707070',
						flex: 1,
						overflow: 'hidden',
					}}
				>
					{data.description}
				</Typography>

				<Box sx={{ mt: '15px' }}>
					{data.contacts.map((contact, index) => (
						<Box
							key={index}
							sx={{
								mt: index === 0 ? '0px' : '10px',
								display: 'flex',
								gap: '10px',
							}}
						>
							<Typography
								sx={{ fontSize: '13px', fontWeight: 400, color: '#8A8A8A' }}
							>
								{contact.type}:
							</Typography>
							<Typography sx={{ fontSize: '13px', fontWeight: 400 }}>
								{contact.value}
							</Typography>
						</Box>
					))}
				</Box>
			</Box>
		</Box>
	)
}

export default PersonCard
