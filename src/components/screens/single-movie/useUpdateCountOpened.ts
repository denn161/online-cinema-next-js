import { useMutation } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { MovieService } from '@/services/movie-service'

import { errorNotification } from '@/utils/toast-error'
import { useEffect } from 'react'

export const useUpdateCountOpened = (slug: string) => {
	const { mutateAsync: updateCountMovie } = useMutation(
		'update count opened movie',
		async () => MovieService.updateCountOpened(slug)
	)

	useEffect(()=>{
	   updateCountMovie()	  
		 //eslint-disable-next-line react-hooks/exhaustive-deps
	},[])
}
