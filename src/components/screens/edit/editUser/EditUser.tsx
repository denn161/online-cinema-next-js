import { Controller, useForm } from 'react-hook-form'

import AdminNavigation from '@/components/ui/adminnavigation/AdminNavigation'

import SkeletonLoader from '@/ui/SkeletonLoader'
import Button from '@/ui/formelements/Button'
import styles from '@/ui/formelements/Form.module.scss'
import InputField from '@/ui/formelements/InputField'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/Meta/Meta'

import AuthFields from '../../auth/AuthFields'

import { IEditUserInput } from './edit-user-interface'
import { useUserEdit } from './useUserEdit'

const EditActer = () => {
	const { setValue, handleSubmit, register, formState, control, getValues } =
		useForm<IEditUserInput>({
			mode: 'onChange',
		})
	const { isLoading, onSubmit } = useUserEdit(setValue)
	return (
		<Meta title="Редактирование актера">
			<AdminNavigation />
			<Heading title="Редактирование актера" />
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				{isLoading && <SkeletonLoader height={48} count={3} />}
			 <div className={styles.fields}>
			 <AuthFields register={register} formState={formState} />
				<Controller
					control={control}
					name="isAdmin"
					render={({ field }) => (
						<button
						  className='text-link mb-7 block'
							onClick={(e) => {
								e.preventDefault()
								field.onChange(!field.value)
							}}
						>
							{field.value
								? 'Сделать обычным пользовтаелем'
								: 'Сделать администратором'}
						</button>
					)}
				/>
			 </div>
				<Button type="submit">Обновить</Button>
			</form>
		</Meta>
	)
}

export default EditActer
