import { ReactNode } from 'react'
import styles from './Layout.module.scss'
import Navigation from './navigation/Navigation'
import SideBar from './sidebar/SideBar'

const Layout = ({children}:{children:ReactNode}) => {
	return <div className={styles.layout}>
        <Navigation/>
				<main className={styles.content}>
             {children}
				</main>
				<SideBar/>
				 
	</div>
}

export default Layout
