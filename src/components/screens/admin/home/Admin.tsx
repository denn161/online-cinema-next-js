import AdminNavigation from '@/components/ui/adminnavigation/AdminNavigation'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/utils/Meta/Meta'
import React from 'react'
import styles from './Admin.module.scss'

import Statisticks from './statisticks/Statisticks'

const Admin = () => {
	return (
		<Meta title='Admin panel'>
			<AdminNavigation/>
			<Heading title='Статистика'/>
		 <Statisticks/>
		</Meta>
	)
}

export default Admin