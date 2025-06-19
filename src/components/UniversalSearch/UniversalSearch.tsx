import React from 'react'
import { InputBase, IconButton, Box, SxProps, Theme } from '@mui/material'
import SearchIcon from '/search.svg'

interface UniversalSearchProps {
	placeholderKey?: string
	onSearch: (query: string) => void
	sx?: SxProps<Theme>
	isExpanded?: boolean
}

const UniversalSearch: React.FC<UniversalSearchProps> = ({
	placeholderKey,
	onSearch,
	sx,
	isExpanded = true,
}) => {
	const [query, setQuery] = React.useState('')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		onSearch(query.trim())
	}

	return (
		<Box
			component='form'
			onSubmit={handleSubmit}
			sx={{
				display: 'flex',
				alignItems: 'center',
				position: 'relative',
				...sx,
			}}
		>
			<InputBase
				value={query}
				onChange={e => setQuery(e.target.value)}
				placeholder={placeholderKey}
				sx={{
					ml: 2,
					flex: 1,
					transition: 'all 0.5s ease-in-out',
					opacity: isExpanded ? 1 : 0,
					width: isExpanded ? '100%' : '0px',
					visibility: isExpanded ? 'visible' : 'hidden',
					transform: isExpanded ? 'scaleX(1)' : 'scaleX(0)',
					transformOrigin: 'left',
				}}
			/>
			<IconButton
				type='submit'
				sx={{
					p: 3,
					position: 'absolute',
					right: 0,
					transition: 'transform 0.3s ease',
					'&:hover': {
						transform: 'scale(1.1)',
					},
				}}
			>
				<img src={SearchIcon} alt='icon' style={{ paddingLeft: 3 }} />
			</IconButton>
		</Box>
	)
}

export default UniversalSearch
