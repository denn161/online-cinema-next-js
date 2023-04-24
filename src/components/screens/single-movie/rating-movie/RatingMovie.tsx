import AuthButton from '@/components/ui/video/AuthPlaceholder/AuthButton'
import { useAuth } from '@/hooks/useAuth'
import { IMovie } from '@/shared/types/movies-types'
import cn from 'classnames'
import { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

import styles from './RatingMovie.module.scss'
import { useRatingMovie } from './useRatingMovie'

interface IRatingMovie {
	maxValue: number
	movie:IMovie
}
const RatingMovie = ({ movie, maxValue }: IRatingMovie) => {
	const { ratingRef, handleClick, isSend, valueRating } =
		useRatingMovie(movie._id)
     
		const {user}=useAuth() 

	return (
		<div className={styles.wrapper}> 
		  <h3>Понравился фильм?</h3>
			<p>Можно оценить фильм здесь!</p>
		 {user?<>
		  {isSend?<div className={styles.thanks}>
				  Спасибо,что оценили фильм! 
			</div>:<ul ref={ratingRef} className={styles.rating} data-rating={valueRating}>
			{Array.from({ length: maxValue })
				.map((item, index) => {
					const ratingValue = index + 1
					return (
						<li
							key={index}
							onClick={() => handleClick(ratingValue)}
							data-value={ratingValue}
						>
							<button>
								<div  className={cn(styles.star,{
									[styles.showstar]:ratingValue<=valueRating
								})}></div>
							</button>
						</li>
					)
				})
				.reverse()}
		</ul>}
		 </>:<AuthButton  slug={movie.slug} />}
		</div>
	)
}

export default RatingMovie
