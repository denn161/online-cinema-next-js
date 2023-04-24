import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

import CatalogMovies from '@/components/ui/catalog-movies/CatalogMovies'

import { IGenre } from '@/shared/types/genre-types'
import { IMovie } from '@/shared/types/movies-types'

import { GenresService } from '@/services/genre-service'
import { MovieService } from '@/services/movie-service'

import Error404 from '../404'
import { ActerService } from '@/services/acter-service'
import { IActer } from '@/shared/types/acter-types'

interface IActorPage {
	movies: IMovie[]
	actor: IActer
}

export default function ActorPage({ movies,actor }: IActorPage) {
	return actor ? (
		<CatalogMovies
			movies={movies || []}
			title={actor.name}			
		/>
	) : (
		<Error404 />
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: actors } = await ActerService.getAllActers()
		const paths = actors.map((actor) => ({
			params: { slug: actor.slug },
		}))

		return { paths: paths, fallback: 'blocking' }
	} catch (error) {
		return {
			fallback: false,
			paths: [],
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: actor } = await ActerService.getActorBySlug(String(params?.slug))
     console.log(actor)
		const { data: movies } = await MovieService.getMoviByActor(actor._id)

		return {
			props: {
				actor,
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
