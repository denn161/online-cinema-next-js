import React from 'react'
import CountUsers from './CountUsers'
import PopularMovie from './PopularMovie'
import styles from '../Admin.module.scss'

const Statisticks = () => {
	return (
		<div className={styles.statisticks}>
        <CountUsers/> 
	      <PopularMovie/>
		</div>
	)
}

export default Statisticks