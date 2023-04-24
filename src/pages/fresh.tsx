import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'

import CatalogMovies from '@/components/ui/catalog-movies/CatalogMovies'

import { IMovie } from '@/shared/types/movies-types'

import { MovieService } from '@/services/movie-service'

interface IFreshPage{
	  movies:IMovie[]
}

export default function FreshPage({movies}:IFreshPage) {

	return (
		<CatalogMovies
			movies={movies || []}
			title="Новые фильмы"
			description="Здесь собраны, которые добавил недавно"
		/>
	)
}


export const getStaticProps:GetStaticProps =async ()=>{
	   try {
			   const {data:movies} =await MovieService.getMovieList() 

				 return {
					 props:{
						  movies
					 },
					 revalidate:60 
				 }
			
		 } catch (error) {
			   return{
					notFound:true
				 }
			
		 }
}