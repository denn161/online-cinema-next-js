import React, { useEffect, useState } from 'react'

const useRenderClient = () => {
   
	const [isRenderClient,setIsRenderClient] =useState(false)

	useEffect(()=>{
    if(!isRenderClient) setIsRenderClient(true)
	},[isRenderClient])

    return {isRenderClient}
}

export default useRenderClient