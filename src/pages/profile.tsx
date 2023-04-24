
import Profile from '@/components/screens/profile/Profile'
import { NextAuthPage } from 'providers/AuthProvider/auth-types'
import React from 'react'

const ProfilePage:NextAuthPage = () => {
	return (
		
		 <Profile />
	)
}

ProfilePage.isOnlyUser=true

export default ProfilePage