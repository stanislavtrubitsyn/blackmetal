import { DocumentCard } from '@/components'
import { Box, Typography } from '@mui/material'
import data from './data.json'

const Syllabus136Page = () => {
	return (
		<Box sx={{ px: '20px', pb: '30px' }}>
			<Box sx={{ py: '30px', display: 'flex', justifyContent: 'center' }}>
				<Typography sx={{ fontSize: '25px', fontWeight: 600, lineHeight: 1 }}>
					Силабуси 136
				</Typography>
			</Box>

			<Box
				sx={{
					display: 'grid',
					gap: '25px',
					justifyContent: 'center',
					gridTemplateColumns: {
						xxs: '1fr',
						xs: 'repeat(2, 1fr)',
						sm: 'repeat(3, 1fr)',
						lg: 'repeat(3, 1fr)',
						xl: 'repeat(4, 1fr)',
						xxl: 'repeat(5, 1fr)',
						xxxl: 'repeat(6, 1fr)',
					},
				}}
			>
				{data.map((item, index) => (
					<DocumentCard key={index} title={item.title} link={item.link} />
				))}
			</Box>
		</Box>
	)
}

export default Syllabus136Page
