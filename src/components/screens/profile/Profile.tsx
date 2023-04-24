
import AdminNavigation from '@/components/ui/adminnavigation/AdminNavigation'
import Button from '@/components/ui/formelements/Button'
import InputField from '@/components/ui/formelements/InputField'
import Heading from '@/components/ui/heading/Heading'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import Meta from '@/utils/Meta/Meta'
import { useForm } from 'react-hook-form'
import AuthFields from '../auth/AuthFields'
import { IProfile } from './profile-interface'
import styles from './Profile.module.scss'
import useProfile from './useProfile'

const Profile = () => {

	 const {handleSubmit,register,formState,setValue} =useForm<IProfile>({
		mode:'onChange'
	 })
	const {isLoading,onSubmit} =useProfile(setValue)    	
	return (
	  <Meta title="Редактирование актера">
			<Heading title="Профиль пользователя" className='mb-6' />
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				{isLoading && <SkeletonLoader height={48} count={2} />}
				<div className={styles.fields}>
					<AuthFields 
					  register={register}
						formState={formState}
					/>
				</div>
				<Button type="submit">Обновить</Button>
			</form>
		</Meta>
	)
}

export default Profile