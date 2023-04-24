import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from './AdminNavigation.module.scss'
import { INavItem } from './admin-nav-interface'

const AdminNavItem: FC<{ item: INavItem }> = ({ item: { title, path } }) => {
	const { asPath } = useRouter()

	return (
		<li
			className={cn({
				[styles.active]: asPath === path,
			})}
		>
			<Link href={path}>{title}</Link>
		</li>
	)
}

export default AdminNavItem
