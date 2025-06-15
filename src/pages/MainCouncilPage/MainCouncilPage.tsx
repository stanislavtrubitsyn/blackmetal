import { Box, Typography } from '@mui/material'
import data from './data.json'
import { PersonCard } from '@/components'

const MainCouncilPage = () => {
	return (
		<Box sx={{ px: '20px', pb: '30px' }}>
			<Box sx={{ py: '30px', display: 'flex', justifyContent: 'center' }}>
				<Typography sx={{ fontSize: '25px', fontWeight: 600, lineHeight: 1 }}>
					Вчена рада
				</Typography>
			</Box>
			<Box
				sx={{
					display: 'grid',
					gap: '25px',
					justifyContent: 'center',
					gridTemplateColumns: {
						xxs: '1fr',
						xs: '1fr',
						sm: 'repeat(2, 1fr)',
						lg: 'repeat(2, 1fr)',
						xl: 'repeat(3, 1fr)',
						xxl: 'repeat(4, 1fr)',
					},
				}}
			>
				{data.map((item, index) => (
					<PersonCard
						key={index}
						photo={item.photo}
						position={item.position}
						name={item.name}
						description={item.description}
						contacts={item.contacts}
					/>
				))}
			</Box>
		</Box>
	)
}

export default MainCouncilPage
