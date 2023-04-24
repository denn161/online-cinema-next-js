
import { IGenre } from './genre-types'

export interface IParameters {
	year: number
	director: string
	buget: string
	duration: number
	hours:string
	country: string
	primera: string
	ratingKp: number
	ratingIMDB: number
}
export interface IActor {
	_id: string
	photo: string
	name: string
	countMovies: number
	slug: string
}
export interface IMovie {
	_id: string
	poster: string
	bigposter: string
	title: string
	originalName:string
	parameters: IParameters
	genres: IGenre[]
	acters: IActor[]
	countOpened: number
	createdAt:string
	videoUrl: string
	rating: number
	slug: string
	quality:string
	description:string
}

export interface IContentList extends Omit<IMovie,'_id'|'poster'|'bigposter'|'title'|'countOpened'|'createdAt'|'videoUrl'|'slug'|'quality'>{}

		