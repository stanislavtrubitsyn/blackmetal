import { DocumentCard } from '@/components'
import { Box, Typography } from '@mui/material'
import { useTranslationData } from '@/hooks/useTranslationData'
import { DocumentCardData } from '@/components/DocumentCard/DocumentCardInterface'
import { DocumentCardAdaptation } from '@/components/DocumentCard/adaptation'

const RegulationsPage = () => {
	const { data } = useTranslationData<DocumentCardData>('regulations')

	if (!data) {
		return null
	}
	return (
		<Box sx={{ px: '20px', pb: '30px' }}>
			<Box sx={{ py: '30px', display: 'flex', justifyContent: 'center' }}>
				<Typography sx={{ fontSize: '25px', fontWeight: 600, lineHeight: 1 }}>
					{data.title}
				</Typography>
			</Box>

			<Box sx={DocumentCardAdaptation}>
				{data.data.map((item, index) => (
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
