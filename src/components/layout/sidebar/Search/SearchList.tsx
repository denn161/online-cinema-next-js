import Image from 'next/image'
import Link from 'next/link'

import { IMovie } from '@/shared/types/movies-types'

import { getMovieUrl } from '@/config/url-config'

import styles from './Search.module.scss'

interface ISearchListProps {
	movies: IMovie[]
}
const SearchList = ({ movies }: ISearchListProps) => {
	return (
		<ul className={styles.list}>
			{!!movies.length ? (
				movies.map((movie) => (
					<Link key={movie._id} href={getMovieUrl(movie.slug)}>
						<img
						 src={movie.poster}
						/>
						<span>{movie.title}</span>
					</Link>
				))
			) : (
				<li className="text-sm text-white text-center my-4">
					Фильмов пока нет
				</li>
			)}
		</ul>
	)
}

export default SearchList
