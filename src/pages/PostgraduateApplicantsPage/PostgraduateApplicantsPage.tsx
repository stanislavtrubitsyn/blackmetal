import { DocumentCard, UniversalSearch } from '@/components'
import { Box, Typography } from '@mui/material'
import { useTranslationData } from '@/hooks/useTranslationData'
import { DocumentCardData } from '@/components/DocumentCard/DocumentCardInterface'
import { DocumentCardAdaptation } from '@/components/DocumentCard/adaptation'
import React from 'react'

const PostgraduateApplicantsPage = () => {
	const { data } = useTranslationData<DocumentCardData>('applicants')
	const [searchQuery, setSearchQuery] = React.useState('')

	if (!data) {
		return null
	}

	const filteredData = data.data.filter(item =>
		item.title.toLowerCase().includes(searchQuery.toLowerCase())
	)

	const handleSearchChange = (query: string) => {
		setSearchQuery(query)
	}

	const handleSearchSubmit = (query: string) => {
		setSearchQuery(query.trim())
	}

	return (
		<Box sx={{ px: '20px', pb: '30px' }}>
			<Box
				sx={{ py: '30px', display: 'flex', justifyContent: 'space-between' }}
			>
				<Typography sx={{ fontSize: '25px', fontWeight: 600, lineHeight: 1 }}>
					{data.title}
				</Typography>
				<UniversalSearch
					onSearch={handleSearchSubmit}
					onChange={handleSearchChange}
					placeholderKey='Поиск по документам'
					sx={{ width: '250px', p: '5px', border: '1px solid #DFDFDF' }}
				/>
			</Box>

			<Box sx={DocumentCardAdaptation}>
				{filteredData.map((item, index) => (
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

export default PostgraduateApplicantsPage
