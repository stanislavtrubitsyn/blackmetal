import { Box, Typography } from '@mui/material'
import { UniversalSearch } from '@/components'
import { useTranslation } from 'react-i18next'

interface DocumentTitleSearchProps {
	title: string
	onSearchSubmit: (query: string) => void
	onSearchChange: (query: string) => void
}

export const DocumentTitleSearch = ({
	title,
	onSearchSubmit,
	onSearchChange,
}: DocumentTitleSearchProps) => {
	const { t } = useTranslation()
	return (
		<Box
			sx={{
				py: '30px',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}
		>
			<Typography sx={{ fontSize: '36px', fontWeight: 600, lineHeight: 1 }}>
				{title}
			</Typography>
			<UniversalSearch
				onSearch={onSearchSubmit}
				onChange={onSearchChange}
				placeholderKey={t('components.search')}
				sx={{ width: '250px', p: '5px', border: '1px solid #DFDFDF' }}
			/>
		</Box>
	)
}

export default DocumentTitleSearch
