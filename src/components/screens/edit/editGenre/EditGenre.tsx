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

import styles from '../../../ui/formelements/Form.module.scss'

import { IEditGenreInput } from './edit-genre-interface'
import { useGenreEdit } from './useGenreEdit'
import dynamic from 'next/dynamic'
 
const DynamicTextEditor = dynamic(()=>import('@/ui/formelements/TextEditor'),{
	ssr:false
})

const EditGenre = () => {
	const {
		setValue,
		handleSubmit,
		register,
		control,
		formState: { errors },
		getValues,
	} = useForm<IEditGenreInput>({
		mode: 'onChange',
	})
	const { isLoading, onSubmit } = useGenreEdit(setValue)
	return (
		<Meta title="Редактирование жанра">
			<AdminNavigation />
			<Heading title="Редактирование жанра" />
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				{isLoading && <SkeletonLoader height={48} count={3} />}
				<div className={styles.fields}>
					<InputField
						{...register('name', {
							required: 'Название жанра обязательно',
						})}
						placeholder="Название жанра"
						error={errors.name}
						style={{ width: '30%' }}
					/>
					<SlugField
						error={errors.slug}
						className="w-[30%]"
						register={register}
						generate={() => {
							setValue('slug', generateSlug(getValues('name')))
						}}
					/>
					<InputField
						{...register('icon', {
							required: 'Иконка жанра обязательна',
						})}
						placeholder="Иконка жанра"
						error={errors.name}
						style={{ width: '30%' }}
					/>
				</div>
				<Controller
					control={control}
					name="description"
					defaultValue=""
					render={({ field: { value, onChange }, fieldState: { error } }) => (
						<DynamicTextEditor
							onChange={onChange}
							value={value}
							error={error}
							placeholder="Описание жанра"
						/>
					)}
					rules={{
						validate: {
							required: (v) =>
								(v && stripHtml(v).result.length > 0) || 'Описание обязательно',
						},
					}}
				/>
				<Button type="submit">Обновить</Button>
			</form>
		</Meta>
	)
}

export default EditGenre
