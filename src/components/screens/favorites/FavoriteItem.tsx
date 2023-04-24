import FavoriteButton from '@/components/screens/single-movie/favorite-button/FavoriteButton'
import { getMovieUrl } from '@/config/url-config'
import { useAuth } from '@/hooks/useAuth'
import { IMovie } from '@/shared/types/movies-types'
import Link from 'next/link'
import styles from './Favorites.module.scss'

interface IFavoriteMovieItem{	
		name:string,
		posterPath: string,
		url:string,
		title:string,
		_id:string	
}

interface IItem{
	 item:IFavoriteMovieItem
}

const FavoriteItem = ({item}:IItem) => {
	  const {user} =useAuth()
	return (
		<div className={styles.itemWrapper}>
    {!!user&&<FavoriteButton movieId={item._id}/>}
		 <Link href={item.url}  >
    <img alt={item.title} src={item.posterPath}/>		
		</Link>
     <div className={styles.title}>{item.title}</div>
		</div>
	)
}

export default FavoriteItem