
export const getStoreLocal=(name:string)=>{	 
	  if(typeof window!=='undefined'){
			const store = localStorage.getItem(name)
			return store ? JSON.parse(store) : null
		}

	  return null	
	  
}