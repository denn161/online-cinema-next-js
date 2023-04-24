import FavoriteItem from '@/components/screens/favorites/FavoriteItem'
import Heading from '@/components/ui/heading/Heading'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import { getMovieUrl } from '@/config/url-config'
import Meta from '@/utils/Meta/Meta'
import React from 'react'
import styles from './Favorites.module.scss'
import { useFavorites } from './useFavorites'

const Favorites = () => {  
	const {isLoading,favoritesMovies} =useFavorites()
	return (
		<Meta title="Избранное">
		<Heading title={'Избранное'} />
		<section className={styles.favorites}>
			{isLoading ? (
				<SkeletonLoader
					count={3}
					className={styles.skeletonLoader}
					containerClassName={styles.containerLoader}
				/>
			) : (
				favoritesMovies?.map((movie) => (
					<FavoriteItem
						key={movie._id}
						item={{
							name: movie.title,
							posterPath: movie.bigposter,
							url: getMovieUrl(movie.slug),
							title: movie.title,
							_id:movie._id,
						}}
					/>
				))
			)}
		</section>
	</Meta>
	)
}

export default Favorites