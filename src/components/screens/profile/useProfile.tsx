import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { SubmitHandler, UseFormSetValue, useForm } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { UserService } from '@/services/user-service'

import { getKeys } from '@/utils/getKeys'
import { errorNotification } from '@/utils/toast-error'

import { IProfile } from './profile-interface'

const useProfile = (setValue: UseFormSetValue<IProfile>) => {
	const { isLoading } = useQuery(
		'get profile user',
		() => {
			return UserService.getUserProfile()
		},

		{
			onSuccess: ({ data }) => {
			  setValue('email',data.email)
			},
			onError: (error) => {
				errorNotification(error, 'Ошибка (get) профиля')
			},
		}
	)
	const { mutateAsync: updateUserProfile } = useMutation(
		'update user  profile',
		(dto: IProfile) => UserService.updateUserProfile(dto),
		{
			onError: (error) =>
				errorNotification(error, 'Ошибка при обновлении профиля'),
			onSuccess: () => {
				toastr.success('Это успех!', 'Ваши данные успешно обновились')
			},
		}
	)
	const onSubmit: SubmitHandler<IProfile> = useCallback(
		async (data) => {
			await updateUserProfile(data)
		},
		[updateUserProfile]
	)
	return { onSubmit, isLoading }
}

export default useProfile
