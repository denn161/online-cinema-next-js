import { Controller, useForm } from 'react-hook-form'
import { stripHtml } from 'string-strip-html'

import AdminNavigation from '@/components/ui/adminnavigation/AdminNavigation'

import SkeletonLoader from '@/ui/SkeletonLoader'
import Button from '@/ui/formelements/Button'
import InputField from '@/ui/formelements/InputField'
import SlugField from '@/ui/formelements/SlugField'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/Meta/Meta'
import generateSlug from '@/utils/getSlug'

import styles from '@/ui/formelements/Form.module.scss'

import { IEditActerInput } from './edit-acter-interface'
import { useActerEdit } from './useActerEdit'
import dynamic from 'next/dynamic'
 
const DynamicUploadFile = dynamic(()=>import('@/ui/formelements/uploadField/UploadField'),{
	ssr:false
})
const EditActer = () => {
	const {
		setValue,
		handleSubmit,
		register,
		control,
		formState: { errors },
		getValues,
	} = useForm<IEditActerInput>({
		mode: 'onChange',
	})
	const { isLoading, onSubmit } = useActerEdit(setValue)
	return (
		<Meta title="Редактирование актера">
			<AdminNavigation />
			<Heading title="Редактирование актера" />
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				{isLoading && <SkeletonLoader height={48} count={3} />}
			     <div className={styles.fields}>
					<InputField
						{...register('name', {
							required: 'Название жанра обязательно',
						})}
						placeholder="Название жанра"
						error={errors.name}
						style={{ width: '45%' }}
					/>
					<SlugField
						error={errors.slug}
						className="w-[45%]"
						register={register}
						generate={() => {
							setValue('slug', generateSlug(getValues('name')))
						}}
					/>				
				<Controller
					control={control}
					name="photo"
					defaultValue=""
					render={({ field: { value, onChange }, fieldState: { error } }) => {
						 return <DynamicUploadFile
						    value={value} 
							  onChange={onChange}
								placeholder={'Фото'}
								error={error}
								folder={'acters'}
                isNoImage={false} 
						 />
					}}
					rules={{
						required:'Фото обязательно'
					}}
				/>
				</div>
				<Button type="submit">Обновить</Button>
			</form>
		</Meta>
	)
}

export default EditActer
