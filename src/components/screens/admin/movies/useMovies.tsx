import { ITableItem } from '@/components/ui/admintable/admin-table-interface'
import { getAdminUrl } from '@/config/url-config'
import useDebounce from '@/hooks/useDebounce'
import { MovieService } from '@/services/movie-service'
import { getGenreList } from '@/utils/getGenresListEach'
import { errorNotification } from '@/utils/toast-error'
import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'


export const useMovies =()=>{

 const [searchTerm, setSearchTerm] = useState('')

  const debouncedSearch = useDebounce(searchTerm, 500)

	const {push} =useRouter()

	const queryData = useQuery(
		['Movies list in admin panel', debouncedSearch],
		() => {
			return MovieService.getMovieList(debouncedSearch)
		},
		{
			select: ({data}) =>
				data.map(
					(movie): ITableItem => ({
						_id: movie._id,
						editUrl: getAdminUrl(`movie/edit/${movie._id}`),
						items: [movie.title,getGenreList(movie.genres),String(movie.rating)],
					})
				),
			onError: (error) => errorNotification(error,'Movie list'),
		}
	)
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}
	const { mutateAsync: createMovie } = useMutation(
		'create movie ',
		() => MovieService.create(),
		{
			onError: (error) => errorNotification(error, 'Create movie'),
			onSuccess: ({ data: _id }) => {
				toastr.success('Создание', 'Фильм создан успешно')
				push(getAdminUrl(`movie/edit/${_id}`))
			},
		}
	)
  const {mutateAsync:deleteAsync} = useMutation(
		'delete movie',
		(movieId:string) =>MovieService.removeMovie(movieId)
		,
		{	
			onError: (error) => errorNotification(error,'Delete movie'),
			onSuccess:()=>{
				 toastr.success('Удаление','Фильм удален успешно')
				 queryData.refetch()
			}
		}
	)

	return useMemo(()=>({
  handleSearch,	
	...queryData,
	searchTerm,
	deleteAsync,
	createMovie
	}),[queryData,searchTerm,deleteAsync,createMovie])

}