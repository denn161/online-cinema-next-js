import Content from '@/components/screens/single-movie/content/Content'
import FavoriteButton from '@/components/screens/single-movie/favorite-button/FavoriteButton'
import React from 'react'
import { IBanner } from './banner-interface'
import styles from './Banner.module.scss'

const Banner = ({posterPath,title,raiting,movieId}:IBanner) => {
	return (
		<div className={styles.banner}>
			<img src={posterPath} alt='Banner Img' />
       {title&&<Content title={title} movieId={movieId} raiting={raiting} />}
		
		</div>
	)
}

export default Banner