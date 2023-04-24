import Link from 'next/link'
import { IGallleryItemProps } from './gallery-interface'
import {getMovieUrl} from '../../../config/url-config'
import cn from 'classnames'
import styles from './Gallery.module.scss'
import Image from 'next/image'


const GalleryItem = ({item,variant='gorizontal'}:IGallleryItemProps) => {


	return (
	<Link href={item.link} className={cn(styles.gallery__item,{
	 [styles.withtext]:item.content,
	 [styles.horizontal]:variant==='gorizontal',
	 [styles.vertical]:variant==='vertical'
	})}>
    <img alt={item.name} src={item.posterPath}/>
		{item.content&&<div className={styles.gallery__content}>
			 <div className={styles.gallery__title}>{item.content.title}</div>
			  {item.content.subtitle&&<div className={styles.gallery__subtitle}>{item.content.subtitle}</div>}
			   
			</div>}
		</Link>
	)
}

export default GalleryItem