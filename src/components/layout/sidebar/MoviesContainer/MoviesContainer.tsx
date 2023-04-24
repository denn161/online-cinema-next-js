import dynamic from 'next/dynamic'
import React from 'react'
import FavoriteMovies from './FavoriteMovies/FavoriteMovies'
import styles from './MoviesContainer.module.scss'
import PopularMovies from './PopularMovies'

const DynamicFavorites = dynamic(()=>import('./FavoriteMovies/FavoriteMovies'),{
	ssr:false
})

const MoviesContainer = () => {
	return (
		<div>
			<PopularMovies/>
			<DynamicFavorites/>
		</div>
	)
}

export default MoviesContainer