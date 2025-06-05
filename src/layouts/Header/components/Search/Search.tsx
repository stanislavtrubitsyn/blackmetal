// src/layouts/Header/components/BurgerMenu/Search.tsx
import { styled, alpha } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { IconButton, InputBase } from '@mui/material'

const SearchWrapper = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	border: '1px solid #C7C7C7',
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	right: 0,
	color: '#C7C7C7',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: '#373737',
	width: '100%',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 1),
		paddingRight: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
	},
}))

interface SearchProps {
	searchQuery: string
	onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	onSearchSubmit: (event: React.FormEvent) => void
}

export const Search = ({ searchQuery, onSearchChange, onSearchSubmit }: SearchProps) => {
	return (
		<SearchWrapper>
			<form
				onSubmit={onSearchSubmit}
				style={{
					width: '100%',
					display: 'flex',
					alignItems: 'center',
					position: 'relative',
				}}
			>
				<StyledInputBase
					placeholder='Пошук по сайту'
					inputProps={{ 'aria-label': 'search' }}
					value={searchQuery}
					onChange={onSearchChange}
				/>
				<SearchIconWrapper>
					<SearchIcon />
				</SearchIconWrapper>
			</form>
		</SearchWrapper>
	)
}
