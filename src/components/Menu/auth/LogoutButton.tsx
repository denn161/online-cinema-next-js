import MaterialIcon from '@/components/ui/MaterialIcon'
import { useActions } from '@/hooks/useActions'
import { MouseEvent } from 'react'


const LogoutButton = () => {

	const {logout} =useActions()

	const handleLogout = (e:MouseEvent<HTMLAnchorElement>)=>{
		   e.preventDefault()
			 logout()
	}
	return (
		<li>
			<a onClick={handleLogout}>
				<MaterialIcon name='MdLogout'/>
         <span>Выход</span>
			</a>
		</li>
	)
}

export default LogoutButton