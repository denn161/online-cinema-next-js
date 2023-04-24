import { IGalleryItem } from '@/components/ui/gallery/gallery-interface'
import { IMovie } from '@/shared/types/movies-types'

export interface ISingleMovie{
	   similarMovies:IGalleryItem[] 
		 movie:IMovie 
		 
}