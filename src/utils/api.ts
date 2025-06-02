import axios from 'axios'

const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	headers: { 'Content-Type': 'application/json' },
})

api.interceptors.request.use(config => {
	console.log(`[${config.method?.toUpperCase()}] ${config.url}`)
	return config
})

api.interceptors.response.use(
	response => response,
	error => {
		const { response } = error
		if (!response) {
			console.error('Ошибка сети:', error)
			return Promise.reject(error)
		}

		switch (response.status) {
			case 401:
				localStorage.removeItem('token')
				if (window.location.pathname !== '/login')
					window.location.href = '/login'
				break
			case 500:
				console.error('Ошибка сервера:', error)
				break
			default:
				console.error(`Ошибка [${response.status}]:`, error)
		}

		return Promise.reject(error)
	}
)

export default api
