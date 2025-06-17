// src/i18n/loadTranslations.ts
import i18n from './i18n.config'

export const loadTranslationData = async <T>(fileName: string): Promise<T> => {
	const language = i18n.language
	try {
		// Динамический импорт файла на основе текущего языка
		const data = await import(`./locales/${language}/${fileName}.json`)
		return data.default as T
	} catch (error) {
		console.error(`Error loading ${fileName} for language ${language}:`, error)
		// Fallback на английский, если файл для текущего языка не найден
		const fallbackData = await import(`./locales/en/${fileName}.json`)
		return fallbackData.default as T
	}
}
