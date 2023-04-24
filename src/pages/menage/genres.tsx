import GenresList from '@/components/screens/admin/genres/GenresList'

import { NextAuthPage } from 'providers/AuthProvider/auth-types'

const GenresPage:NextAuthPage = () => {
	return (
		<div>
			<GenresList/>
		</div>
	)
}
GenresPage.isOnlyAdmin=true

export default GenresPage