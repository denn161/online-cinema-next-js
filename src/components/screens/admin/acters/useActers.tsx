import { ITableItem } from '@/components/ui/admintable/admin-table-interface'
import { getAdminUrl } from '@/config/url-config'
import useDebounce from '@/hooks/useDebounce'
import { ActerService } from '@/services/acter-service'
import { GenresService } from '@/services/genre-service'
import { MovieService } from '@/services/movie-service'
import { IMovie } from '@/shared/types/movies-types'
import { IUser } from '@/shared/types/user-types'
import { dateReverse } from '@/utils/date/dateReverse'
import { sortedElements } from '@/utils/sortedElements'
import { errorNotification } from '@/utils/toast-error'
import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'


export const useActers =()=>{

 const [searchTerm, setSearchTerm] = useState('')

  const debouncedSearch = useDebounce(searchTerm, 500)

	const {push} =useRouter()

	const queryData = useQuery(
		['Acters list in admin panel', debouncedSearch],
		() => {
			return ActerService.getAllActers(debouncedSearch)
		},
		{
			select: ({data}) =>
				data.sort(sortedElements).map(
					(acter): ITableItem => ({
						_id:acter._id,
						editUrl: getAdminUrl(`acter/edit/${acter._id}`),
						items: [acter.name,String(acter.countMovies)],
					})
				),
			onError: (error) => errorNotification(error,'Acters list'),
		}
	)
	
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}  
	const { mutateAsync: createActer } = useMutation(
		'create acter ',
		() => ActerService.create(),
		{
			onError: (error) => errorNotification(error, 'Create acter'),
			onSuccess: ({ data: _id }) => {
				toastr.success('Создание', 'Актер создан успешно')
				push(getAdminUrl(`acter/edit/${_id}`))
			},
		}
	)

  const {mutateAsync:deleteAsync} = useMutation(
		'delete acter',
		(acterId:string) =>ActerService.removeActer(acterId)
		,
		{	
			onError: (error) => errorNotification(error,'Delete acter'),
			onSuccess:()=>{
				 toastr.success('Удаление','Актер удален успешно')
				 queryData.refetch()
			}
		}
	)
	return useMemo(()=>({
  handleSearch,	
	...queryData,
	searchTerm,
	deleteAsync,
	createActer
	}),[queryData,searchTerm,deleteAsync,createActer])

}