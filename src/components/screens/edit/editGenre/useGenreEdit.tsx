import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { IGenre } from '@/shared/types/genre-types'

import { GenresService } from '@/services/genre-service'

import { getKeys } from '@/utils/getKeys'
import { errorNotification } from '@/utils/toast-error'

import { IEditGenreInput } from './edit-genre-interface'
import { getAdminUrl } from '@/config/url-config'
import { useCallback } from 'react'

export const useGenreEdit = (setValue: UseFormSetValue<IEditGenreInput>) => {
	const { push, query } = useRouter()

	const genreId = String(query?.id)

	const {
	 isLoading,	
	} = useQuery(
		['get genre', genreId],
		() => {
			return GenresService.getGenreById(genreId)
		},

		{
			onSuccess: ({ data }) =>
				getKeys<IEditGenreInput>(data).forEach((key) => setValue(key, data[key])),
			enabled: !!query.id,
			onError: (error) => {
				errorNotification(error, 'Ошибка жанра')
			},
		}
	)
	const {mutateAsync:updateGenre} =useMutation('update genre in admin panel',(dto:IEditGenreInput)=>GenresService.updateGenre(genreId,dto),{
		onError:error=>errorNotification(error,'Ошибка при обновлении'),
		onSuccess:()=>{
			toastr.success('Успех','Успешно обновился') 
			push(getAdminUrl('genres'))
		}
	})
	const onSubmit:SubmitHandler<IEditGenreInput> = useCallback(async(data)=>{
	      await updateGenre(data)    	  
	},[updateGenre])

	return {isLoading,onSubmit}
}
