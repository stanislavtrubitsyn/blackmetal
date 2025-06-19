import { Box, Typography } from '@mui/material'
import { PersonCard } from '@/components'
import { useTranslationData } from '@/hooks/useTranslationData'
import { PersonCardData } from '@/components/PersonCard/PersonCardInterface'
import { PersonCardAdaptation } from '@/components/PersonCard/adaptation'

const YoungCouncilPage = () => {
	const { data } = useTranslationData<PersonCardData>('youngcouncil')

	if (!data) {
		return null
	}
	return (
		<Box sx={{ px: '20px', pb: '30px' }}>
			<Box sx={{ py: '30px', display: 'flex', justifyContent: 'center' }}>
				<Typography sx={{ fontSize: '36px', fontWeight: 600, lineHeight: 1 }}>
					{data.title}
				</Typography>
			</Box>
			<Box sx={PersonCardAdaptation}>
				{data.data.map((item, index) => (
					<PersonCard
						key={index}
						photo={item.photo}
						position={item.position}
						name={item.name}
					/>
				))}
			</Box>
		</Box>
	)
}

export default YoungCouncilPage
