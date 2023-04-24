import Collections from '@/components/screens/collections/Collections'
import { ICollection } from '@/components/screens/collections/collections-interface'
import { GenresService } from '@/services/genre-service'
import { GetStaticProps } from 'next'
import React from 'react'

interface IDiscovery{
	 collections:ICollection[]
}

const DiscoveryPage = ({collections}:IDiscovery) => {	 
	    
	return (
		 <Collections collections={collections||[]}/>
	)
}


export const getStaticProps:GetStaticProps = async()=>{
	    
	try {
		  
		const {data:dataCol} = await GenresService.getCollections()		 
		
		 const collections = dataCol.filter((item)=>item.image) 
		return{
			 props:{
         collections
			 },
			revalidate:60 
		}
		
	} catch (error) {
		  return {
				notFound:true
			}
		
	}

}




export default DiscoveryPage