import cn from 'classnames'
import styles from './AdminTable.module.scss'

interface IAdminTableHeader{
	  items:string[]
}
const AdminTableHeader = ({items}:IAdminTableHeader) => {
	return (
		<div className={cn(styles.item,styles.itemheader)}>
      {items.map((item,index)=>
			 <div key={index}>{item}</div>
			)}
			<div>Действия</div>
		</div>
	)
}

export default AdminTableHeader