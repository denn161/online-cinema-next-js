import { useRouter } from 'next/router'
import { IMenuItem } from './menu-interface'
import cn from 'classnames'
import styles from './Menu.module.scss'
import Link from 'next/link'
import MaterialIcon from '../ui/MaterialIcon'
import { TMaterialIconName } from '@/shared/types/icon-types'

const MenuItem = ({ icon, title, path }: IMenuItem) => {

	const { asPath } = useRouter()
	 
             
	return (
		<li
			className={cn({
				[styles.active]:asPath===path,				
			})}
		>
			<Link href={path}>
				<MaterialIcon name={icon} />
				<span>{title}</span>
			</Link>
		</li>
	)
}

export default MenuItem
