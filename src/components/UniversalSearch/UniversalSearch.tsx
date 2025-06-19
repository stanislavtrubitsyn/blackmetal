import React from 'react'
import { InputBase, IconButton, Box, SxProps, Theme } from '@mui/material'
// import SearchIcon from '@mui/icons-material/Search'
import SearchIcon from '../../../public/search.svg'
interface UniversalSearchProps {
	placeholderKey?: string // Ключ из i18n JSON (например, "searchPlaceholder")
	onSearch: (query: string) => void
	sx?: SxProps<Theme> // Позволяет задавать кастомные стили
}

const UniversalSearch: React.FC<UniversalSearchProps> = ({ placeholderKey, onSearch, sx }) => {
	// const { t } = useTranslation()
	const [query, setQuery] = React.useState('')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		onSearch(query.trim())
	}

	return (
		<Box
			component='form'
			onSubmit={handleSubmit}
			sx={{ display: 'flex', alignItems: 'center', ...sx }}
		>
			<InputBase
				value={query}
				onChange={e => setQuery(e.target.value)}
				placeholder={placeholderKey}
				sx={{ ml: 2, flex: 1 }}
				inputProps={{ 'aria-label': placeholderKey }}
			/>
			<IconButton type='submit' sx={{ p: 3 }} aria-label='search'>
				<img src={SearchIcon} alt='icon' style={{ paddingLeft: 3 }} />
			</IconButton>
		</Box>
	)
}

export default UniversalSearch
