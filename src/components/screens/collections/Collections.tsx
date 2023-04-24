import Description from '@/components/ui/heading/Description'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/utils/Meta/Meta'
import CollectionItem from './CollectionItem'
import { ICollection } from './collections-interface'
import styles from './Collections.module.scss'

interface ICollections{
	  collections:ICollection[]
}

const Collections = ({collections}:ICollections) => {
	return (		
		 <Meta title='Коллекции фильмов по жанру' description='Здесь можно найти фильмы по жанрам'>
			<Heading title='Коллекции фильмов'/>
			<Description text='Здесь можно найти фильмы по жанрам' className={styles.description}/>
		   <section className={styles.collections}> 
			 {collections.map((item)=>
			  <CollectionItem key={item._id} item={item}/>
			 )}
			 </section>
		 </Meta>
	)
}

export default Collections