
import Link from 'next/link'
import { IMovieList } from './movi-list-interface'
import styles from './MoviesContainer.module.scss'
import MoviesItem from './MoviesItem'



const MoviesList = ({title,path,movies}:IMovieList) => {
	return (
		<div className={styles.movies__list}>
			<span className={styles.heading}>{title}</span>
			 {!!movies.length&&movies.map((movie)=>
			   <MoviesItem movie={movie} key={movie._id}/>
			 )}
			 <Link href={path} className={styles.movies__btn}>
				Посмотреть больше
			 </Link>
		</div>
	)
}

export default MoviesList