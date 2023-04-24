import EditGenre from '@/components/screens/edit/editGenre/EditGenre'
import { NextAuthPage } from 'providers/AuthProvider/auth-types'
import React from 'react'

const EditGenrePage:NextAuthPage = () => {
	return (
		<div>
    <EditGenre/>
		</div>
	)
}

EditGenrePage.isOnlyAdmin=true

export default EditGenrePage