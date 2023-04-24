import { ICollection } from '@/components/screens/collections/collections-interface'
import { IEditGenreInput } from '@/components/screens/edit/editGenre/edit-genre-interface'
import { getGenresUrl } from '@/config/api-config'
import { IGenre } from '@/shared/types/genre-types'
import instance, { publicAxios } from 'api'

export const GenresService ={	  
	async getGenres(searchTerm?:string){
		   return publicAxios.get<IGenre[]>(getGenresUrl(),{
				params:searchTerm&&{searchTerm}
			 })
	},

	async updateGenre(id:string,dto:IEditGenreInput){
		const body = {...dto}
      return instance.put<IEditGenreInput>(getGenresUrl(`/${id}`),body)
	},
  async getGenreById(id:string){
	   return instance.get<IEditGenreInput>(getGenresUrl(`/${id}`))
	},
   async genrBySlug(slug:string){
		  console.log(slug)
		  return publicAxios.get<IGenre>(getGenresUrl(`/by-slug/${slug}`))
	 },   
	 async getCollections(){
		   return publicAxios.get<ICollection[]>(getGenresUrl('/collections'))
	 },
	async create(){
		return instance.post<string>(getGenresUrl(''))
	}
	,
	async removeGenre(id:string){
		  return instance.delete(getGenresUrl(`/${id}`))
	}
}