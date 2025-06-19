import { SxProps } from '@mui/material'

export const PersonCardAdaptation: SxProps = {
	display: 'grid',
	gap: '25px',
	justifyContent: 'center',
	gridTemplateColumns: 'repeat(3, 1fr)',
	'@media (max-width: 1831px)': {
		gridTemplateColumns: 'repeat(2, 1fr)',
	},
	'@media (max-width: 1225px)': {
		gridTemplateColumns: '1fr',
	},
	'@media (max-width: 756px)': {
		gridTemplateColumns: '1fr',
	},
}
