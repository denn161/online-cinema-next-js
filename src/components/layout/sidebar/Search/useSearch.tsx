import { ChangeEvent, useState } from 'react'
import { useQuery } from 'react-query'

import useDebounce from '@/hooks/useDebounce'

import { MovieService } from '@/services/movie-service'

const useSearch = () => {
	
	const [searchTerm, setSearchTerm] = useState('')

	const debouncedSearch = useDebounce(searchTerm, 500)

	const { isLoading, data,isSuccess} = useQuery(
		['search movie list', debouncedSearch],
		() => {
			return MovieService.getMovieList(debouncedSearch)
		},
		{
			select: ({ data }) => data,
			enabled:!!debouncedSearch
		}
	)
	const handleSearch = (e:ChangeEvent<HTMLInputElement>)=>{
		    setSearchTerm(e.target.value)
	}

	return { handleSearch, isLoading, data,isSuccess,searchTerm }
}

export default useSearch
