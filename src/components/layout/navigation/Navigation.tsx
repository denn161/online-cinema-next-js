
import Logo from '@/components/Logo'
import Menu from '@/components/Menu/Menu'
import styles from './Navigation.module.scss'

const Navigation = () => {
	return (
		<div className={styles.navigation}>
			 <Logo/>
			 <Menu/>
		</div>
	)
}

export default Navigation