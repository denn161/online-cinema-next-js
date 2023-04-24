import { IGenre } from '@/shared/types/genre-types'

export interface IEditGenreInput extends Omit<IGenre,'_id'>{
	     
}