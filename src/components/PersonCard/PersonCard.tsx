import { Box, Typography } from '@mui/material'
import { PersonCardInterface } from './PersonCardInterface'

const PersonCard = ({
	photo = '/public/person.jpg',
	position,
	name,
	description,
	contacts,
}: PersonCardInterface) => {
	return (
		<Box
			sx={{
				width: '100%',
				m: '0 auto',
				maxWidth: '589px',
				display: 'flex',
				flexDirection: 'row',
				bgcolor: '#FFFFFF',
				'@media (max-width: 600px)': {
					flexDirection: 'column',
				},
			}}
		>
			<Box
				sx={{
					width: '43%',
					aspectRatio: '0.7505 / 1',
					bgcolor: '#FFFFFF',
					backgroundImage: `url(/blackmetal${photo})`,
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					'@media (max-width: 600px)': {
						width: '100%',
						aspectRatio: '1 / 1',
						backgroundSize: 'contain',
					},
				}}
			/>
			<Box
				sx={{
					width: '57%',
					px: '30px',
					py: '30px',
					display: 'flex',
					flexDirection: 'column',
					height: '100%',
					'@media (max-width: 600px)': {
						width: '100%',
					},
				}}
			>
				<Typography
					sx={{ fontSize: '14px', fontWeight: 400, color: '#8A8A8A' }}
				>
					{position}
				</Typography>

				<Typography
					sx={{ mt: '13px', fontSize: '22px', fontWeight: 700, lineHeight: 1 }}
				>
					{name}
				</Typography>

				<Typography
					sx={{
						mt: '10px',
						fontSize: '13px',
						fontWeight: 400,
						color: '#707070',
						flex: 1,
						mb: '15px',
					}}
				>
					{description}
				</Typography>

				<Box>
					{contacts.map((contact, index) => (
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
