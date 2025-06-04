import { createTheme } from '@mui/material/styles'

const breakpoints = {
	values: {
		xxs: 0,
		xs: 481,
		sm: 769,
		md: 1025,
		lg: 1281,
		xl: 1441,
		xxl: 1921,
		хххl: 2561,
	},
}

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: { main: '#2D7A84' },
		background: { default: '#f4f4f4', paper: '#fff' },
	},
	breakpoints,
	components: {
		MuiSvgIcon: {
			styleOverrides: {
				root: {
					transition: 'transform 0.2s ease-in-out',
				},
			},
		},
	},
})

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: { main: '#90caf9' },
		background: { default: '#121212', paper: '#1e1e1e' },
	},
	breakpoints,
})
