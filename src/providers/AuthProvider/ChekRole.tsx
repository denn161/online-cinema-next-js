import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/router'
import { TypeComponentAuthFields } from './auth-types'


const ChekRole = ({Component:{isOnlyAdmin,isOnlyUser},children}:TypeComponentAuthFields) => {
   
	const {user} =useAuth()

 const router = useRouter()

 const Children = ()=><>{children}</>


 if(user?.isAdmin) return <Children/> 

 if(isOnlyAdmin){
	   router.pathname!=='/404'&&router.replace('/404')
		 return null
 }

 const isUser = user&&!user.isAdmin
  
 if(isUser &&isOnlyUser) return <Children/> 
 else{
	router.pathname!=='/auth'&&router.replace('/auth')
	return null
 }
	return (
		<div>ChekRole</div>
	)
}

export default ChekRole