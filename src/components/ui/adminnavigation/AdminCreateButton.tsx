import React from 'react'
import Button from '../formelements/Button'
import styles from './AdminNavigation.module.scss'

interface IAdminCreateButton{
	 onClick:()=>void
}

const AdminCreateButton = ({onClick}:IAdminCreateButton) => 
{
	return (
		<div>
    <Button type={'button'} onClick={onClick}>Создать</Button>
		</div>
	)
}

export default AdminCreateButton