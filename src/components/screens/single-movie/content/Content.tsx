import React from 'react'

import MaterialIcon from '@/components/ui/MaterialIcon'

import styles from './Content.module.scss'
import FavoriteButton from '../favorite-button/FavoriteButton'
import { useAuth } from '@/hooks/useAuth'

interface IContent {
	title: string
	raiting?: number
	movieId:string
}
const Content = ({ title, raiting,movieId }: IContent) => {
	  const {user}=useAuth()
	return (
		<div className={styles.content}>
			<h1>{title}</h1>
			<div className={styles.raiting}>
				<MaterialIcon name="MdStarRate" />
				{raiting?.toFixed(1)}
			</div>
			{!!user&&<FavoriteButton movieId={movieId}/>}
		</div>
	)
}

export default Content
