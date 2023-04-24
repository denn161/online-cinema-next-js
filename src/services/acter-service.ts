import { IEditActerInput } from '@/components/screens/edit/editActer/edit-acter-interface'
import { getActersUrl } from '@/config/api-config'
import { IActer } from '@/shared/types/acter-types'
import instance, { publicAxios } from 'api'

export const ActerService={	   
	async getAllActers(searchTerm?:string){
		  return publicAxios.get<IActer[]>(getActersUrl(''),{
				params:searchTerm&&{
					searchTerm
				}
			})
	},
	async getActerById(id:string){
    return instance.get<IEditActerInput>(getActersUrl(`/${id}`))
	},  
	 async getActorBySlug(slug:string){
		  return publicAxios.get<IActer>(getActersUrl(`/by-slug/${slug}`))
	 }
	,
	async create(){
     return instance.post<string>(getActersUrl(''))
	},
	async update(id:string,dto:IEditActerInput){	
   return instance.put<IEditActerInput>(getActersUrl(`/${id}`),dto)
	},
	async removeActer(id:string){
		return instance.delete(getActersUrl(`/${id}`))
	}
}