import { SxProps } from '@mui/material'

export const DocumentCardAdaptation: SxProps = {
	display: 'grid',
	gap: '25px',
	justifyContent: 'center',
	gridTemplateColumns: 'repeat(4, 1fr)',
	'@media (max-width: 1498px)': {
		gridTemplateColumns: 'repeat(3, 1fr)',
	},
	'@media (max-width: 1127px)': {
		gridTemplateColumns: 'repeat(2, 1fr)',
	},
	'@media (max-width: 756px)': {
		gridTemplateColumns: '1fr',
	},
}
