import cn from 'classnames'
import { useCallback, useEffect, useState } from 'react'
import { useMutation } from 'react-query'

import { UserService } from '@/services/user-service'

import { errorNotification } from '@/utils/toast-error'

import { useFavorites } from '../../favorites/useFavorites'

import styles from './FavoriteButton.module.scss'



interface IFavoriteButton {
	movieId: string

}

const FavoriteButton = ({ movieId }: IFavoriteButton) => {
	const [isToggle, setIsToggle] = useState(false)
	const { refetch, favoritesMovies } = useFavorites()
   
	useEffect(() => {
		if (!favoritesMovies?.length) return
			const isHasFovorite = favoritesMovies.some((item) => item._id === movieId)
			if (isToggle !== isHasFovorite) setIsToggle(isHasFovorite)
		
	}, [favoritesMovies,movieId,isToggle])

	const { mutateAsync: toggleFavorites } = useMutation(
		'toggle add movies to favorites',
		() => UserService.toggleFavorites(movieId),
		{
			onError: (error) =>
				errorNotification(error, 'Ошибка при добавлении фильма в избранное'),
			onSuccess: () => {
			  setIsToggle(!isToggle)
				refetch()
			},
		}
	)
	const addFavorites = useCallback(async () => {
		await toggleFavorites()
	}, [])

	return (
		<>
			<button
				onClick={addFavorites}
				className={cn(styles.button, {
					[styles.animate]:isToggle,
				})}
				style={{ backgroundImage: `url('/heart-animation.png')` }}
			/>
		</>
	)
}

export default FavoriteButton
