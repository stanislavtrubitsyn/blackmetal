import { useAuth } from '@/hooks/Auth/useAuth'
import { JSX } from 'react'
import { Navigate } from 'react-router-dom'

const AuthGuard = ({
	children,
	role,
}: {
	children: JSX.Element
	role?: string
}) => {
	const { role: userRole, isAuthenticated } = useAuth()

	if (!isAuthenticated) {
		return <Navigate to='/login' />
	}

	if (role && userRole !== role) {
		return <Navigate to='/' />
	}

	return children
}

export default AuthGuard
