import { getGenreUrl, getMovieUrl } from '@/config/url-config'
import Link from 'next/link'
import React from 'react'
import CollectionImage from './CollectionImage'
import { ICollection } from './collections-interface'
import styles from './Collections.module.scss'
 interface ICollectionItem{
	  item:ICollection
 }
const CollectionItem = ({item}:ICollectionItem) => {
	return (
		<Link href={getGenreUrl(item.slug)} className={styles.item}> 
		  <CollectionImage collection={item}/>
      <div className={styles.content}>
				 <div className={styles.item__title}>{item.title}</div>
			</div>			
			
		</Link>
	)
}

export default CollectionItem