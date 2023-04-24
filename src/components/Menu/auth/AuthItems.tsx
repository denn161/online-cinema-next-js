import { getAdminHomeUrl } from '@/config/url-config'
import { useAuth } from '@/hooks/useAuth'
import MenuItem from '../MenuItem'
import LogoutButton from './LogoutButton'


const AuthItems = () => {
  
	const {user} =useAuth()

	return (
		<>
		{!!user?<>
		  <MenuItem icon='MdSettings' title='Профиль' path='/profile'/>
			<LogoutButton/>
		</>
		:<MenuItem  icon='MdLogin' path='/auth' title='Войти'/>}
	   {user?.isAdmin&&<MenuItem title='Админ Панель' path={getAdminHomeUrl} icon='MdOutlineLock'/>}
		</>
	)
}

export default AuthItems