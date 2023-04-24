import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@/components/ui/admintable/admin-table-interface'

import useDebounce from '@/hooks/useDebounce'

import { GenresService } from '@/services/genre-service'

import { getAdminUrl } from '@/config/url-config'

import { errorNotification } from '@/utils/toast-error'
import { sortedElements } from '@/utils/sortedElements'

export const useGenres = () => {
	const [searchTerm, setSearchTerm] = useState('')

	const debouncedSearch = useDebounce(searchTerm, 500)

	const { push } = useRouter()

	const queryData = useQuery(
		['Genres list in admin panel', debouncedSearch],
		() => {
			return GenresService.getGenres(debouncedSearch)
		},
		{
			select: ({ data }) =>
				data.sort(sortedElements).map(
					(genre): ITableItem => ({
						_id: genre._id,
						editUrl: getAdminUrl(`genre/edit/${genre._id}`),
						items: [genre.name, genre.slug],
					})
				),
			onError: (error) => errorNotification(error, 'Genre list'),
		}
	)
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: createGenre } = useMutation(
		'create genre ',
		() => GenresService.create(),
		{
			onError: (error) => errorNotification(error, 'Create movie'),
			onSuccess: ({ data: _id }) => {
				toastr.success('Создание', 'Жанр создан успешно')
				push(getAdminUrl(`genre/edit/${_id}`))
			},
		}
	)

	const { mutateAsync: deleteAsync } = useMutation(
		'delete genre',
		(genreId: string) => GenresService.removeGenre(genreId),
		{
			onError: (error) => errorNotification(error, 'Delete movie'),
			onSuccess: () => {
				toastr.success('Удаление', 'Фильм удален успешно')
				queryData.refetch()
			},
		}
	)

	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			deleteAsync,
			createGenre,
		}),
		[queryData, searchTerm, deleteAsync, createGenre]
	)
}
