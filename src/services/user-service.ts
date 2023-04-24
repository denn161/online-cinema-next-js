import instance from 'api'

import { IUser } from '@/shared/types/user-types'

import { getUsersUrl } from '@/config/api-config'
import { IProfile } from '@/components/screens/profile/profile-interface'
import { IEditUserInput } from '@/components/screens/edit/editUser/edit-user-interface'
import { IMovie } from '@/shared/types/movies-types'

export const UserService = {
	async getAllUsers(searchTerm?: string) {
		const { data } = await instance.get<IUser[]>(getUsersUrl(''), {
			params: searchTerm && {
				searchTerm,
			},
		})

		return data
	},
  async updateUserProfile(dto:IProfile){
	 return instance.put<IProfile>(getUsersUrl('/profile'),dto)
	},
  async getUserById(id:string){
		  return instance.get<IEditUserInput>(getUsersUrl(`/${id}`)) 

	},
	async updateUser(id:string,dto:IEditUserInput){
		return instance.put<IEditUserInput>(getUsersUrl(`/${id}`),dto) 
},
   async getUserProfile(){
	   return instance.get<IProfile>(getUsersUrl('/profile'))
	 },

	 async toggleFavorites(movieId:string){
		  return instance.put<IUser>(getUsersUrl('/profile/favorites'),{movieId})
	 },
	 async getFavorites(){
		  return instance.get<IMovie[]>(getUsersUrl('/profile/favorites')) 
	 },


	async removeUser(_id: string) {
		return instance.delete(getUsersUrl(`/${_id}`))
	},
}
