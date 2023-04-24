import { getMovieUrl } from '@/config/url-config'

import Meta from '@/utils/Meta/Meta'

import GalleryItem from '../gallery/GalleryItem'
import Description from '../heading/Description'
import Heading from '../heading/Heading'

import styles from './CatalogMovies.module.scss'
import { ICatalog } from './catalog-movies-interface'

const CatalogMovies = ({ title, movies, description }: ICatalog) => {
	 
	return (
		<Meta title={title} description={description}>
			<Heading title={title} className={styles.heading} />
			{description && (
				<Description text={description} className={styles.descr} />
			)}

			<section className={styles.catalog}>
				{ !!movies.length&&movies?.map((movie) => (
					<GalleryItem
						key={movie._id}
						item={{
							name: movie.title,
							posterPath: movie.poster,
							link: getMovieUrl(movie.slug),
							content: {
								title: movie.title,
							},
						}}
						variant="gorizontal"
					/>
				))}
			</section>
		</Meta>
	)
}

export default CatalogMovies
