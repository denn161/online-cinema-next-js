import { useCallback } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { UserService } from '@/services/user-service'

import { errorNotification } from '@/utils/toast-error'
import { useAuth } from '@/hooks/useAuth'

export const useFavorites = () => {
	 const {user} =useAuth()
	const {
		isLoading,
		data: favoritesMovies,
		refetch,
	} = useQuery(
		' get favorites movies',
		() => {
			return UserService.getFavorites()
		},
		{
			select: ({ data }) => data,
			enabled:!!user
		}
	)

	return { isLoading, favoritesMovies, refetch }
}
