import React from 'react'
import AuthButton from './AuthButton'
import styles from './AuthPlaceholder.module.scss'

interface IAuthPlaceHolder{
	slug:string
}
const AuthPlaceholder = ({slug}:IAuthPlaceHolder) => {
	return (
		<div className={styles.placeholder}>
			 <p>Нужно войти в систему, что бы посмотреть фильм</p>
			 <AuthButton slug={slug}/>
		</div>
	)
}

export default AuthPlaceholder