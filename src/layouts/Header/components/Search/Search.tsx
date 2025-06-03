import { styled, alpha } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { IconButton, InputBase } from '@mui/material'

const SearchWrapper = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: 0,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
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
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>
			<form onSubmit={onSearchSubmit}>
				<StyledInputBase
					placeholder='Search…'
					inputProps={{ 'aria-label': 'search' }}
					value={searchQuery}
					onChange={onSearchChange}
				/>
			</form>
		</SearchWrapper>
	)
}
