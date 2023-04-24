import axios from 'api'

import { getUsersUrl } from '@/config/api-config'

export const AdminService = {

	async getCountUsers() {
		const {data} = await axios.get<number>(getUsersUrl('/count'))
		return data
	},
}
