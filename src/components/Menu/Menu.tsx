import React from 'react'
import GenreMenu from './genres/GenreMenu'
import { firstMenu, userMenu } from './menu-data'
import styles from './Menu.module.scss'
import MenuList from './MenuList'

const Menu = () => {
	return (
		<div className={styles.nav}>
			<MenuList title={firstMenu.title} items={firstMenu.items} />
			<GenreMenu />
			<MenuList title={userMenu.title} items={userMenu.items} />
		</div>
	)
}

export default Menu
