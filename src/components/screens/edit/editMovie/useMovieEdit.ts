import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { getKeys } from '@/utils/getKeys'
import { errorNotification } from '@/utils/toast-error'

import { IEditMovieInput} from './edit-movie-interface'
import { getAdminUrl } from '@/config/url-config'
import { useCallback } from 'react'
import { MovieService } from '@/services/movie-service'

export const useMovieEdit = (setValue: UseFormSetValue<IEditMovieInput>) => {

	const { push, query } = useRouter()

	const movieId = String(query?.id)

	const {
	 isLoading,	
	} = useQuery(
		['get movie', movieId],
		() => {
			return MovieService.getMovieById(movieId)
		},

		{
			onSuccess: ({ data }) =>{									  
			return	getKeys<IEditMovieInput>(data).forEach((key) => setValue(key, data[key]))
			},
			enabled: !!query.id,
			onError: (error) => {
				errorNotification(error, 'Ошибка (get) фильма')
			},
		}
	)
	const {mutateAsync:updateMovie} =useMutation('update movie in admin panel',(dto:IEditMovieInput)=>MovieService.update(movieId,dto),{
		onError:error=>errorNotification(error,'Ошибка при обновлении'),
		onSuccess:()=>{
			toastr.success('Успех','Успешно обновился фильм') 
			push(getAdminUrl('movies'))
		}
	})
	const onSubmit:SubmitHandler<IEditMovieInput> = useCallback(async(data)=>{
	      await updateMovie(data)    	  
	},[updateMovie])

	return {isLoading,onSubmit}
}
