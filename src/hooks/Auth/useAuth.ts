import { useEffect, useState } from 'react'

export const useAuth = () => {
	const [role, setRole] = useState<string>('guest')

	useEffect(() => {
		const token = localStorage.getItem('token')
		if (!token) return

		try {
			const decoded = JSON.parse(atob(token.split('.')[1]))
			setRole(decoded.role ?? 'guest')
		} catch {
			console.warn('Некорректный токен')
		}
	}, [])

	return { role, isAuthenticated: role !== 'guest' }
}
