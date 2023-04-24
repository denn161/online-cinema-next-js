import instance, { publicAxios } from 'api'

import { IEditMovieInput } from '@/components/screens/edit/editMovie/edit-movie-interface'

import { IMovie } from '@/shared/types/movies-types'

import { getMoviesUrl } from '@/config/api-config'

export const MovieService = {
	async getMovieList(searchTerm?: string) {
		return publicAxios.get<IMovie[]>(getMoviesUrl(), {
			params: searchTerm && { searchTerm },
		})
	},
	async getMostPopularMovies() {
		const { data: movies } = await publicAxios.get<IMovie[]>(
			getMoviesUrl('/most-popular')
		)
		return movies
	},
	async getMovieBySlug(slug: string) {
		return publicAxios.get<IMovie>(getMoviesUrl(`/by-slug/${slug}`))
	},
	async update(id: string, dto: IEditMovieInput) {
		const body = { ...dto }
		return instance.put<IEditMovieInput>(getMoviesUrl(`/${id}`), body)
	},
	async getMovieById(id: string) {
		return instance.get<IEditMovieInput>(getMoviesUrl(`/${id}`))
	},
	async getMoviByActor(actorId: string) {
		return publicAxios.get<IMovie[]>(getMoviesUrl(`/by-acter/${actorId}`))
	},
	async getMovieByGenres(id: string) {
		return publicAxios.get<IMovie[]>(getMoviesUrl(`/by-genres/${id}`))
	},
	async create() {
		return instance.post<string>(getMoviesUrl(''))
	},
	async updateCountOpened(slug: string) {
		return publicAxios.put<string>(getMoviesUrl('/update-count'), {
			slug,
		})
	},
	async removeMovie(movieId: string) {
		return instance.delete(getMoviesUrl(`/${movieId}`))
	},
}
