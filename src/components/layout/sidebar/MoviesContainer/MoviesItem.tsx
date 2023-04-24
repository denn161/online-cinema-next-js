import { IMovie } from '@/shared/types/movies-types'
import Link from 'next/link'
import React from 'react'
import { getMovieUrl,getGenreUrl } from '@/config/url-config'
import styles from './MoviesContainer.module.scss'
import { getGenresListEach } from '@/utils/getGenresListEach'
import MaterialIcon from '@/components/ui/MaterialIcon'

interface IMovieItemProps{
	  movie:IMovie
}

const MoviesItem = ({movie}:IMovieItemProps) => { 
  
	return (
		<div  className={styles.movies__item}>
      <Link href={getMovieUrl(movie.slug)}>
			<img src={movie.poster} alt='Movie Img'/>
			</Link>
		   <div className={styles.movies__info}>
			 <span className={styles.movies__title}>{movie.title}</span>
			  <div className={styles.movies__genres}>
				{movie?.genres.map((genre,index)=>
			  <Link href={getGenreUrl(genre.slug)} className={styles.movies__genre} key={genre._id}>{getGenresListEach(index,genre.name,movie.genres.length)}</Link>
			 )}
				</div>
				<div className={styles.movies__rating}>
					<MaterialIcon name='MdStarRate'/>
					<span>{movie.rating.toFixed(1)}</span>

				</div>

			 </div>			 
		</div>
	)
}

export default MoviesItem