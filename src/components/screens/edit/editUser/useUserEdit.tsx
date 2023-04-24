import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { getKeys } from '@/utils/getKeys'
import { errorNotification } from '@/utils/toast-error'

import { IEditUserInput} from './edit-user-interface'
import { getAdminUrl } from '@/config/url-config'
import { useCallback } from 'react'
import { ActerService } from '@/services/acter-service'
import { UserService } from '@/services/user-service'
import { IProfile } from '../../profile/profile-interface'

export const useUserEdit = (setValue: UseFormSetValue<IEditUserInput>) => {

	const { push, query } = useRouter()

	const userId = String(query?.id)

	const {
	 isLoading,	
	} = useQuery(
		['get user in admin panel', userId],
		() => {
			return UserService.getUserById(userId)
		},

		{
			onSuccess: ({ data }) =>{
				setValue('email',data.email)
				setValue('isAdmin',data.isAdmin)
			},
			enabled: !!query.id,
			onError: (error) => {
				errorNotification(error, 'Ошибка (get) пользователя')
			},
		}
	)
	const {mutateAsync:updateUser} =useMutation('update acter in admin panel',(dto:IEditUserInput)=>UserService.updateUser(userId,dto),{
		onError:error=>errorNotification(error,'Ошибка при обновлении пользовтаеля'),
		onSuccess:()=>{
			toastr.success('Успех','Успешно обновился пользовтаель') 
			push(getAdminUrl('users'))
		}
	})
	const onSubmit:SubmitHandler<IEditUserInput> = useCallback(async(data)=>{
	      await updateUser(data)    	  
	},[updateUser])

	return {isLoading,onSubmit}
}
