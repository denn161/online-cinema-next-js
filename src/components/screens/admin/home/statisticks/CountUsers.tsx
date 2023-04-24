import { AdminService } from '@/services/admin-service'
import React from 'react'
import { useQuery } from 'react-query'
import cn from 'classnames'
import styles from '../Admin.module.scss'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import { sklonenie } from '@/utils/sklonenie-word'
const CountUsers = () => {

	 const {isLoading,data} =useQuery('Get all users',async()=>{
		     return AdminService.getCountUsers()
	 })

	return (
		<div className={cn(styles.statisticks__block,styles.statisticks__item)}>
			<div>
				{isLoading?<SkeletonLoader count={1} height={48}/>
				:
				 <span className={styles.number}>
				 {data}
				 </span>
				}
				<span className={styles.descriptions}>
					{sklonenie(data,['Пользователь','Пользователя','Пользователей'])}
				</span>
			</div>
		</div>
	)
}

export default CountUsers