import { create } from 'zustand'

interface ThemeState {
	isDarkMode: boolean
	toggleTheme: () => void
}

const THEME_STORAGE_KEY = 'isDarkMode'

const getInitialTheme = (): boolean =>
	JSON.parse(localStorage.getItem(THEME_STORAGE_KEY) || 'false')

export const useThemeStore = create<ThemeState>(set => ({
	isDarkMode: getInitialTheme(),
	toggleTheme: () =>
		set(state => {
			const newTheme = !state.isDarkMode
			localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(newTheme))
			return { isDarkMode: newTheme }
		}),
}))
