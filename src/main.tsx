import { useThemeStore } from '@/store/ThemeStore/useThemeStore'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/index.css'
import { darkTheme, lightTheme } from './theme'

const Root = () => {
	const { isDarkMode, toggleTheme } = useThemeStore()

	return (
		<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
			<CssBaseline />
			<App />
			{/* <button onClick={toggleTheme}>Сменить тему</button> */}
		</ThemeProvider>
	)
}

createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<Root />
	</BrowserRouter>
)
