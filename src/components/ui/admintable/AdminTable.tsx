import React from 'react'
import SkeletonLoader from '../SkeletonLoader'
import { IAdminTableItem, ITableItem} from './admin-table-interface'
import styles from './AdminTable.module.scss'
import AdminTableHeader from './AdminTableHeader'
import AdminTableItem from './AdminTableItem'

interface IAdminTable{
	 tableItems:ITableItem[]|undefined
	 isLoading:boolean 
	 headerItems:string[]
	 removeHandler:(id:string)=>void
}
const AdminTable = ({headerItems,isLoading,removeHandler,tableItems}:IAdminTable) => { 
	return (
		<div className={styles.table}>
		 <AdminTableHeader items={headerItems}/>
		 {isLoading ? <SkeletonLoader count={1} height={48} className='mt-4'/>
		 :tableItems?.length? tableItems?.map((item)=><AdminTableItem tableItem={item} key={item._id} removeHandler={()=>removeHandler(item._id)}/>)		 
		 :<div className={styles.notfound}>Элементов нет</div>}
		</div>
	)
}

export default AdminTable