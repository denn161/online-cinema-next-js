import SkeletonLoader from '@/components/ui/SkeletonLoader'
import { MovieService } from '@/services/movie-service'
import { useQuery } from 'react-query'
import MoviesList from './MoviesList'


const PopularMovies = () => {

const {isLoading,data:movies} =useQuery('get popular movies in sidebar',()=>{
		   return MovieService.getMostPopularMovies()
	},{
		select:(data)=>data.slice(0,4)
	})
	return (
		<div>
			{isLoading?(<div className='mt-11'><SkeletonLoader count={3} className='h-28 mb-4'/></div>):
			(<MoviesList  title='Популярные фильмы' path='/trending' movies={movies||[]}/>)}
		</div>
	)
}

export default PopularMovies