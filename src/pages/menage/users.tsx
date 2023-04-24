import UserList from '@/components/screens/admin/users/UserList'
import { NextAuthPage } from 'providers/AuthProvider/auth-types'
import React from 'react'

const UsersListPage:NextAuthPage = () => {
	return (
		 <UserList/>
	)
}

UsersListPage.isOnlyAdmin=true

export default UsersListPage