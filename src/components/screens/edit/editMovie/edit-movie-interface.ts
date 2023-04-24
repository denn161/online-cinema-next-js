

import { IMovie } from '@/shared/types/movies-types'

export interface IEditMovieInput extends Omit<IMovie,'_id'>{
	     
}