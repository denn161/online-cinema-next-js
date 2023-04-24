import { IMenu } from './menu-interface'
import MenuItem from './MenuItem'
import styles from './Menu.module.scss'
import AuthItems from './auth/AuthItems'
import dynamic from 'next/dynamic'

const DynamicAuthItems = dynamic(()=>import('./auth/AuthItems'),{ssr:false})

const MenuList = ({ title, items }: IMenu) => {
	return (
		<div className={styles.menu}>
			<h4 className={styles.menu__title}>{title}</h4>
			<ul className={styles.menu__list}>
				{items?.map((item) => (
					<MenuItem
						icon={item.icon}
						title={item.title}
						path={item.path}
						key={item.path}
					/>
				))}		
			{title === 'Profile' ? <DynamicAuthItems/> : null}	
			</ul>
		
		</div>
	)
}

export default MenuList
