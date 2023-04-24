import { useFavorites } from '@/components/screens/favorites/useFavorites'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import { useAuth } from '@/hooks/useAuth'
import MoviesList from '../MoviesList'
import NotAuthFavorites from './NotAuthFavorites'

const FavoriteMovies = () => {
	  const {isLoading,favoritesMovies} =useFavorites()

		const {user}=useAuth()
		if(!user) return <NotAuthFavorites/>

	return (
		 <>
		  {isLoading?<SkeletonLoader count={3} className='h-24 mb-4'/>:(
				<MoviesList movies={favoritesMovies?.slice(0,4)||[]} path={'/favorites'} title={'Избранные фильмы'}/>
			)}
		 </>
	)
}

export default FavoriteMovies