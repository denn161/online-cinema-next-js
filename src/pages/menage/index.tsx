

import Admin from '@/components/screens/admin/home/Admin'
import { NextAuthPage } from 'providers/AuthProvider/auth-types'
import React from 'react'

const AdminPage:NextAuthPage = () => {
	return (
		 <Admin/>
	)
}

AdminPage.isOnlyAdmin=true

export default AdminPage