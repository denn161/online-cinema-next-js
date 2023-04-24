import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { TypeComponentAuthFields } from './auth-types'

const DynamicChekRole = dynamic(() => import('./ChekRole'), { ssr: false })

const AuthProvider = ({
	Component: { isOnlyAdmin, isOnlyUser },
	children,
}: TypeComponentAuthFields) => {
	const { user } = useAuth()

	const { logout, checkAuth } = useActions()

	const { pathname } = useRouter()

	useEffect(() => {
		const accessToken = Cookies.get('accessToken')
		if (accessToken) checkAuth()
	}, [])

	useEffect(() => {
		const refreshToken = Cookies.get('refreshToken')
		if (!refreshToken && user) logout()
	}, [pathname])

	const Children = () => <>{children}</>

	return !isOnlyAdmin && !isOnlyUser ? (
		<Children />
	) : (
		<DynamicChekRole Component={{ isOnlyAdmin, isOnlyUser }}>
			{children}
		</DynamicChekRole>
	)

	return <div>AuthProvider</div>
}

export default AuthProvider
