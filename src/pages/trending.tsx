import { GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'

import CatalogMovies from '@/components/ui/catalog-movies/CatalogMovies'

import { IMovie } from '@/shared/types/movies-types'

import { MovieService } from '@/services/movie-service'
 
 interface ITrending{
	 movies:IMovie[]
 }

export default function TrendingPage({movies}:ITrending) {	
	return (
		<CatalogMovies
			movies={movies || []}
			title="Популярные фильмы"
			description="Самы просматриваемые фильмы"
		/>
	)
}

export const getStaticProps:GetStaticProps=async()=>{
	         
	try {
		 const movies = await MovieService.getMostPopularMovies()

		  return {
				 props:{
					movies
				 },
				 revalidate:60 
				 
			}
		
	} catch (error) {
		  return {
				 notFound:true
			}
		
	}
}
