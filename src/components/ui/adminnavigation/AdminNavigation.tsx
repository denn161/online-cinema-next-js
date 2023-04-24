import { navItems } from './admin-nav-data'
import styles from './AdminNavigation.module.scss'
import AdminNavItem from './AdminNavItem'

const AdminNavigation = () => {
	return <nav className={styles.nav}>
		 <ul>
			{navItems.map((item)=>
			 <AdminNavItem item={item} key={item.path}/>
			)} 
		 </ul>

	</nav>
}

export default AdminNavigation
