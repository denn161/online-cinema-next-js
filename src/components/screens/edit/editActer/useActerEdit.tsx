import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { getKeys } from '@/utils/getKeys'
import { errorNotification } from '@/utils/toast-error'

import { IEditActerInput} from './edit-acter-interface'
import { getAdminUrl } from '@/config/url-config'
import { useCallback } from 'react'
import { ActerService } from '@/services/acter-service'

export const useActerEdit = (setValue: UseFormSetValue<IEditActerInput>) => {

	const { push, query } = useRouter()

	const acterId = String(query?.id)

	const {
	 isLoading,	
	} = useQuery(
		['get acter', acterId],
		() => {
			return ActerService.getActerById(acterId)
		},
		{
			onSuccess: ({ data }) =>
				getKeys<IEditActerInput>(data).forEach((key) => setValue(key, data[key])),
			enabled: !!query.id,
			onError: (error) => {
				errorNotification(error, 'Ошибка (get) актера')
			},
		}
	)
	const {mutateAsync:updateActer} =useMutation('update acter in admin panel',(dto:IEditActerInput)=>ActerService.update(acterId,dto),{
		onError:error=>errorNotification(error,'Ошибка при обновлении'),
		onSuccess:()=>{
			toastr.success('Успех','Успешно обновился') 
			push(getAdminUrl('acters'))
		}
	})
	const onSubmit:SubmitHandler<IEditActerInput> = useCallback(async(data)=>{
	      await updateActer(data)    	  
	},[updateActer])

	return {isLoading,onSubmit}
}
