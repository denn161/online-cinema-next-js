import MoviesList from '@/components/screens/admin/movies/MoviesList'
import { NextAuthPage } from 'providers/AuthProvider/auth-types'

const MoviesPage:NextAuthPage = () => {
	return (
		<div>
			<MoviesList/>
		</div>
	)
}
MoviesPage.isOnlyAdmin=true

export default MoviesPage