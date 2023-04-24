import MoviesContainer from './MoviesContainer/MoviesContainer'
import Search from './Search/Search'
import styles from './SideBar.module.scss'

const SideBar = () => {
	return (
		<div className={styles.sidebar}>
			<Search />
			{/* Movie container */}
			<MoviesContainer/>
		</div>
	)
}

export default SideBar
