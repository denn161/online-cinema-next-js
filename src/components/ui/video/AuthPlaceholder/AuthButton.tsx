import { getMovieUrl } from '@/config/url-config'
import Link from 'next/link'
import styles from './AuthPlaceholder.module.scss'

interface IAuthButton{
	slug:string
}
const AuthButton = ({slug}:IAuthButton) => {
	return (
		<Link className={styles.btn} href={`/auth/?redirect=${getMovieUrl(slug)}`}>
			Войти в систему
		</Link>
	)
}

export default AuthButton