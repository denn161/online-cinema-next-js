import Image from 'next/image'
import React from 'react'
import { ICollection } from './collections-interface'

 interface ICollImage{
	  collection:ICollection
 }

const CollectionImage = ({collection:{image,title}}:ICollImage) => {
	return (
		<>
		 <img alt={title} src={image}/>
		</>
	)
}

export default CollectionImage