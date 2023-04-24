import { useRouter } from 'next/router'
import React from 'react'
import MaterialIcon from '../MaterialIcon'
import styles from './AdminTable.module.scss'

interface IAdminActions{
	 editUrl:string 
	 removeHandler:()=>void
}
const AdminActions = ({editUrl,removeHandler}:IAdminActions) => {

	const {push} =useRouter()
  
	const handleEditUser = ()=>{
		   push(editUrl)
	}
	return (
		<div className={styles.actions}>
      <button onClick={handleEditUser}>
				 <MaterialIcon name={'MdEdit'}/>
				</button>
				<button onClick={removeHandler}>
				<MaterialIcon name={'MdClose'}/>
				</button>
		</div>
	)
}

export default AdminActions