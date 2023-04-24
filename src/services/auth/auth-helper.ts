import { data } from 'autoprefixer'
import Cookies from 'js-cookie'

import { IAuthResponse, ITokens } from '@/store/user/user-interface'

const removeProperty =
	(prop: string) =>
	({ [prop]: __, ...rest }) =>
		rest

export const saveTokenCookies = ({ accessToken, refreshToken }: ITokens) => {
	Cookies.set('accessToken', accessToken)
	Cookies.set('refreshToken', refreshToken)
}

export const setLs = (name: string, data: IAuthResponse) => {
	const user = {
		email: data.user.email,
		isAdmin: data.user.isAdmin,
		createdAt: data.user.createdAt,
	}
	saveTokenCookies(data)
	window.localStorage.setItem(name, JSON.stringify(user))
}
export const clearCookies = () => {
	const values = ['accessToken', 'refreshToken']
	values.forEach((value) => Cookies.remove(value))
	window.localStorage.removeItem('user')
}
