import { DocumentCard, DocumentTitleSearch } from '@/components'
import { Box } from '@mui/material'
import { useTranslationData } from '@/hooks/useTranslationData'
import { DocumentCardData } from '@/components/DocumentCard/DocumentCardInterface'
import { DocumentCardAdaptation } from '@/components/DocumentCard/adaptation'
import { useState } from 'react'

const PostgraduateApplicantsPage = () => {
	const { data } = useTranslationData<DocumentCardData>('applicants')
	const [searchQuery, setSearchQuery] = useState('')

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
			<DocumentTitleSearch
				title={data.title}
				onSearchSubmit={handleSearchSubmit}
				onSearchChange={handleSearchChange}
			/>

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
