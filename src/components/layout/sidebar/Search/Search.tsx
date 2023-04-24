import SearchField from '@/components/ui/SearchField/SearchField'

import styles from './Search.module.scss'
import SearchList from './SearchList'
import useSearch from './useSearch'

const Search = () => {
	const { data, isSuccess, handleSearch, searchTerm } = useSearch()   
	return (
		<div className={styles.wrapper}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{isSuccess && <SearchList movies={data || []} />}
		</div>
	)
}

export default Search
