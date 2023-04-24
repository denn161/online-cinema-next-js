
import { isTemplateSpan } from 'typescript'
import { IAdminTableItem, ITableItem } from './admin-table-interface'
import AdminActions from './AdminActions'
import styles from './AdminTable.module.scss'

const AdminTableItem = ({removeHandler,tableItem}
	:IAdminTableItem) => {

	
	return (
		<div className={styles.item}>
			{tableItem.items.map((value,index)=><div key={index}>{value}</div>)}
			<AdminActions removeHandler={()=>removeHandler(tableItem._id)} editUrl={tableItem.editUrl}/>
		</div>
	)
}

export default AdminTableItem