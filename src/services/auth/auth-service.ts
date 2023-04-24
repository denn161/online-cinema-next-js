import { getContentType, publicAxios } from 'api'
import Cookies from 'js-cookie'

import { getAuthUrl } from '@/config/api-config'

import { IAuthResponse, IUserState } from '@/store/user/user-interface'

import { clearCookies, saveTokenCookies, setLs } from './auth-helper'

export const AuthService = {
	async register(email: string, password: string) {
		const body = { email, password }

		const { data } = await publicAxios.post<IAuthResponse>(
			getAuthUrl('/register'),
			body
		)

		if (data.accessToken) {
			setLs('user', data)
		}

		return data
	},

	async login(email: string, password: string) {
		const body = { email, password }

		const { data } = await publicAxios.post<IAuthResponse>(
			getAuthUrl('/login'),
			body
		)

		if (data.accessToken) {
			setLs('user', data)
		}

		return data
	},

	logout() {
		clearCookies()
	},

	async getNewSTokens() {
		const refreshToken = Cookies.get('refreshToken')	
			const { data } = await publicAxios.post<IAuthResponse>(
				getAuthUrl('/login/update-token'),
				{ refreshToken },{
					headers:getContentType()
				}
			)

			if(data.accessToken) setLs('user',data)
			return data
		   
		
	},
}
