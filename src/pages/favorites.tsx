import Favorites from '@/components/screens/favorites/Favorites'
import { NextAuthPage } from 'providers/AuthProvider/auth-types'
import React from 'react'

const FavoritesPage:NextAuthPage = () => {
	return (
		 <Favorites/>
	)
}

FavoritesPage.isOnlyUser=true

export default FavoritesPage