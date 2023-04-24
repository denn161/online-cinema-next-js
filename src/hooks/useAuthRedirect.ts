import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuth } from './useAuth'


const useAuthRedirect = () => {
  
const {user} =useAuth()

const {query,push} =useRouter()
 
 const redirect = query.redirect&&query.redirect.toString()||'/' 
 console.log(redirect)
  
 useEffect(()=>{
   if(user){
		 push(redirect)
	 }

 },[user,redirect,push])

}

export default useAuthRedirect