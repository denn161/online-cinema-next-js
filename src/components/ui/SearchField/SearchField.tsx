import { ChangeEvent } from 'react'
import MaterialIcon from '../MaterialIcon'
import styles from './SearchField.module.scss'

interface ISearchField {
	searchTerm: string
	handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
}

const SearchField = ({ searchTerm, handleSearch }: ISearchField) => {
	return <div className={styles.field}>
      <MaterialIcon name='MdSearch'/>
      <input placeholder='Поиск' value={searchTerm} onChange={handleSearch}/>
	</div>
}

export default SearchField
