import {
	GetStaticPaths,
	GetStaticProps,	
} from 'next'


import { IMovie } from '@/shared/types/movies-types'

import { MovieService } from '@/services/movie-service'
import Error404 from '../404'
import { IGalleryItem } from '@/components/ui/gallery/gallery-interface'
import SingleMovie from '@/components/screens/single-movie/SingleMovie'
import { getMovieUrl } from '@/config/url-config'
import { sortedElements } from '@/utils/sortedElements'

interface IGenrePage {
	similarMovies: IGalleryItem[]
	movie: IMovie|undefined
}
export default function MoviePage({similarMovies, movie }: IGenrePage) {	     
	
	return movie? (
		 <SingleMovie movie={movie} similarMovies={similarMovies||[]}/>
	):(<Error404/>)
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: movies } = await MovieService.getMovieList()
		const paths = movies.map((movie) => ({
			params: {slug: movie.slug },
		}))		
       
		return { paths:paths, fallback:'blocking' }
	} catch (error) {
		return {
			fallback: false,
			paths: [],
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	      
	try {
		const { data: movie } = await MovieService.getMovieBySlug(String(params?.slug)) 
    
		const genreId:string = movie.genres.sort(sortedElements).map((genre)=>genre._id)[0]

		const {data:dataMovies} =await MovieService.getMovieByGenres(genreId) 

		const similarMovies:IGalleryItem[]=dataMovies.filter((item)=>item._id!==movie._id).map((movie)=>({
			 name:movie.title,
			 posterPath:movie.poster,
			 link:getMovieUrl(movie.slug),
			 content:{
				  title:movie.title
			 }
		}))
		return {
		 	props: {
			  	similarMovies,
			  	movie,
			},
			revalidate:60
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}
