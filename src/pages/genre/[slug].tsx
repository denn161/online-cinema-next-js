import {
	GetStaticPaths,
	GetStaticProps,
	InferGetStaticPropsType,
	NextPage,
} from 'next'
import { useCallback, useEffect, useState } from 'react'

import CatalogMovies from '@/components/ui/catalog-movies/CatalogMovies'

import { IGenre } from '@/shared/types/genre-types'
import { IMovie } from '@/shared/types/movies-types'

import { GenresService } from '@/services/genre-service'
import { MovieService } from '@/services/movie-service'
import { useRouter } from 'next/router'
import Error404 from '../404'

interface IGenrePage {
	movies: IMovie[]
	genre: IGenre|undefined
}

export default function GenrePage({ movies, genre }: IGenrePage) {
	     
	return genre? (
		<CatalogMovies
			movies={movies || []}
			title={genre.name}
			description={genre.description}
		/>
	):(<Error404/>)
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: genres } = await GenresService.getGenres()
		const paths = genres.map((genre) => ({
			params: {slug: genre.slug },
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
		const { data: genre } = await GenresService.genrBySlug(String(params?.slug))
		 

		const { data: movies } = await MovieService.getMovieByGenres(genre._id)

		return {
			props: {
				genre,
				movies,
			},
			revalidate:60
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}
