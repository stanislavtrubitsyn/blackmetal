import { DocumentCard } from '@/components'
import { Box, Typography } from '@mui/material'
import data from './data.json'
import data_en from './data_en.json'
import { useTranslation } from 'react-i18next'

const AntiPlagiarismPage = () => {
	const { t, i18n } = useTranslation()
	const currentData = i18n.language === 'en' ? data_en : data

	return (
		<Box sx={{ px: '20px', pb: '30px' }}>
			<Box sx={{ py: '30px', display: 'flex', justifyContent: 'center' }}>
				<Typography sx={{ fontSize: '25px', fontWeight: 600, lineHeight: 1 }}>
					{t('pages.antiplagiat.title')}
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
				{currentData.map((item, index) => (
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

export default AntiPlagiarismPage
