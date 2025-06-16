import { DocumentCard } from '@/components'
import { Box, Typography } from '@mui/material'
import data from './data.json'

const RegulationsPage = () => {
	return (
		<Box sx={{ px: '20px', pb: '30px' }}>
			<Box sx={{ py: '30px', display: 'flex', justifyContent: 'center' }}>
				<Typography sx={{ fontSize: '25px', fontWeight: 600, lineHeight: 1 }}>
					Правила та положення
				</Typography>
			</Box>

			<Box
				sx={{
					display: 'grid',
					gap: '25px',
					justifyContent: 'center',
					gridTemplateColumns: 'repeat(4, 1fr)',
					'@media (max-width: 1498px)': {
						gridTemplateColumns: 'repeat(3, 1fr)',
					},
					'@media (max-width: 1127px)': {
						gridTemplateColumns: 'repeat(2, 1fr)',
					},
					'@media (max-width: 756px)': {
						gridTemplateColumns: '1fr',
					},
				}}
			>
				{data.map((item, index) => (
					<DocumentCard
						key={index}
						title={item.title}
						link={item.link}
						date={item.date}
					/>
				))}
			</Box>
		</Box>
	)
}

export default RegulationsPage
