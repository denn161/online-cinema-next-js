import AdminCreateButton from '../adminnavigation/AdminCreateButton'
import SearchField from '../SearchField/SearchField'
import { IAdminHeader } from './admin-header-inteface'
import styles from './AdminHeader.module.scss'


const AdminHeader = ({onClick,handleSearch,searchTerm}:IAdminHeader) => {
	return (
		<div className={styles.header}>
			 <SearchField searchTerm={searchTerm} handleSearch={handleSearch}/>
			 {onClick&&<AdminCreateButton onClick={onClick}/>}
		</div>
	)
}

export default AdminHeader