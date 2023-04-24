import React from 'react'
import { IGallery } from './gallery-interface'
import styles from './Gallery.module.scss'
import GalleryItem from './GalleryItem'

const Gallery = ({items}:IGallery) => {

	return (
		<div className={styles.gallery}>
			{!!items.length&&items.map((item)=>
			 <GalleryItem item={item} variant='vertical' key={item.link}/>
			)}

		</div>
	)
}

export default Gallery