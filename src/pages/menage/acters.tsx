import { NextAuthPage } from 'providers/AuthProvider/auth-types'

import ActersListPage from '@/components/screens/admin/acters/ActersListPage'

const ActersPage: NextAuthPage = () => {
	return (
		<div>
			<ActersListPage />
		</div>
	)
}
ActersPage.isOnlyAdmin = true

export default ActersPage
