import { SxProps } from '@mui/material'

export const DocumentCardAdaptation: SxProps = {
	display: 'grid',
	gap: '25px',
	gridTemplateColumns: {
		xxs: '1fr',
		xs: 'repeat(auto-fit, 390px)',
	},
	justifyContent: 'center',
}

export const DocumentCardWrapper: SxProps = {
	px: '20px',
	pb: '30px',
	// display: 'flex',
	// flexDirection: 'column',
	// alignItems: 'center',
}
