import cn from 'classnames'

import Link from 'next/link'
import React from 'react'
import { useQuery } from 'react-query'

import SkeletonLoader from '@/components/ui/SkeletonLoader'

import SubHeading from '@/ui/heading/SubHeading'

import { IMovie } from '@/shared/types/movies-types'

import { MovieService } from '@/services/movie-service'

import { getMovieUrl } from '@/config/url-config'

import { sklonenie } from '@/utils/sklonenie-word'

import styles from '../Admin.module.scss'
import Image from 'next/image'

const PopularMovie = () => {
	const { isLoading, data: movie } = useQuery(
		'Get most popular movie in admin',
		async () => {
			return MovieService.getMostPopularMovies()
		},
		{
			select: (data): IMovie => data[1],
		}
	)
	
	return (
		<div
			className={cn(styles.statisticks__item, styles.statisticks__popularItem)}
		>
			<SubHeading title="Самый популярный фильм" />
			{isLoading&& <SkeletonLoader height={48} />}
			{!!movie && (
				<>
					<h3 className={styles.title}>
						Открыли данный фильм:{movie.countOpened}
						{sklonenie(movie?.countOpened, ['раз', 'раза', 'раз'])}
					
					</h3>
					<Link href={getMovieUrl(movie?.slug)}>
						<img className={styles.statisticks__img} src={movie?.bigposter} alt="Most popular film" />
					</Link>
				</>
				
			)}
		</div>
	)
}

export default PopularMovie
