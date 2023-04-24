import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'

import { ITableItem } from '@/ui/admintable/admin-table-interface'

import useDebounce from '@/hooks/useDebounce'

import { UserService } from '@/services/user-service'

import { getAdminUrl } from '@/config/url-config'

import { dateReverse } from '@/utils/date/dateReverse'
import { errorNotification } from '@/utils/toast-error'
import { toastr } from 'react-redux-toastr'

const useUsers = () => {
	const [searchTerm, setSearchTerm] = useState('')

	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['Users list', debouncedSearch],
		() => {
			return UserService.getAllUsers(debouncedSearch)
		},
		{
			select: (data) =>
				data.map(
					(user): ITableItem => ({
						_id: user._id,
						editUrl: getAdminUrl(`user/edit/${user._id}`),
						items: [user.email, dateReverse(user.createdAt)],
					})
				),
			onError: (error) => errorNotification(error,'User list'),
		}
	)
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}
	
  const {mutateAsync:deleteAsync} = useMutation(
		'delete user',
		(userId:string) =>UserService.removeUser(userId)
		,
		{	
			onError: (error) => errorNotification(error,'Delete user'),
			onSuccess:()=>{
				 toastr.success('Удаление','Пользователь удален успешно')
				 queryData.refetch()
			}
		}
	)

	return useMemo(()=>({
  handleSearch,	
	...queryData,
	searchTerm,
	deleteAsync	
	}),[queryData,searchTerm,deleteAsync])
}

export default useUsers
