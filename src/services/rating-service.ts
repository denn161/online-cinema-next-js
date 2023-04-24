import { getRatingsUrl } from '@/config/api-config'
import { IMovie } from '@/shared/types/movies-types'
import instance from 'api'

export const RatingService = {
   async setRating(movieId:string,value:number){
		  return instance.post<number>('ratings/set-rating',{movieId,value})
	 },
	 async getMavieRatingByUser(movieId:string){
		   return instance.get<number>(getRatingsUrl(`/${movieId}`))
	 }
	 
}