import dynamic from 'next/dynamic'
import { Controller, useForm } from 'react-hook-form'
import { stripHtml } from 'string-strip-html'

import AdminNavigation from '@/components/ui/adminnavigation/AdminNavigation'
import HoursField from '@/components/ui/formelements/HoursField'

import SkeletonLoader from '@/ui/SkeletonLoader'
import Button from '@/ui/formelements/Button'
import styles from '@/ui/formelements/Form.module.scss'
import InputField from '@/ui/formelements/InputField'
import SlugField from '@/ui/formelements/SlugField'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/Meta/Meta'
import { getHours } from '@/utils/convertToHours'
import generateSlug from '@/utils/getSlug'

import { useAdminActers } from '../editActer/useAdminActers'

import { IEditMovieInput } from './edit-movie-interface'
import { useAdminGenres } from './useAdminMovieGenres'
import { useMovieEdit } from './useMovieEdit'

const DynamicUploadFile = dynamic(
	() => import('@/ui/formelements/uploadField/UploadField'),
	{
		ssr: false,
	}
)
const DynamicTextEditor = dynamic(
	() => import('@/ui/formelements/TextEditor'),
	{
		ssr: false,
	}
)

const DynamicSelectField = dynamic(() => import('@/ui/select/SelectField'))

const EditMovie = () => {
	const {
		setValue,
		handleSubmit,
		register,
		control,
		formState: { errors },
		getValues,
	} = useForm<IEditMovieInput>({
		mode: 'onChange',
	})
	const { isLoading, onSubmit } = useMovieEdit(setValue)

	const { isLoading: isLoadGenres, data: genres } = useAdminGenres()

	const { isLoading: isLoadingActors, data: actors } = useAdminActers()

	return (
		<Meta title="Редактирование фильма">
			<AdminNavigation />
			<Heading title="Редактирование фильма" />
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				{isLoading && <SkeletonLoader height={48} count={3} />}
				<div className={styles.fields}>
					<InputField
						{...register('title', {
							required: 'Название фильма обязательно',
						})}
						placeholder="Название фильма"
						error={errors.title}
						style={{ width: '30%' }}
					/>
						<InputField
						{...register('originalName', {
							required: 'Название фильма обязательно',
						})}
						placeholder="Оригинал"
						error={errors.originalName}
						style={{ width: '30%' }}
					/>
					<SlugField
						error={errors.slug}
						className="w-[30%]"
						register={register}
						generate={() => {
							setValue('slug', generateSlug(getValues('title')))
						}}
					/>
					<InputField
						{...register('parameters.buget', {
							required: 'Бюджет фильма обязателен',
						})}
						placeholder="Бюджет фильма"
						error={errors.parameters?.buget}
						style={{ width: '30%' }}
					/>
					<InputField
						{...register('parameters.country', {
							required: 'Страна фильма',
						})}
						placeholder="Страна"
						error={errors.title}
						style={{ width: '30%' }}
					/>
					<InputField
						{...register('parameters.director', {
							required: 'Режиссер фильма обязательно',
						})}
						placeholder="Режиссер"
						error={errors.parameters?.director}
						style={{ width: '30%' }}
					/>
					<InputField
						{...register('parameters.duration', {
							required: 'Длительность фильма обязательно',
						})}
						placeholder="Длительность"
						error={errors.parameters?.duration}
						style={{ width: '30%' }}
					/>
					<HoursField
						error={errors.parameters?.hours}
						className="w-[31%]"
						register={register}
						generate={() => {
							setValue(
								'parameters.hours',
								getHours(getValues('parameters.duration'))
							)
						}}
					/>
					<InputField
						{...register('parameters.primera', {
							required: 'Дата выхода фильма обязательно',
						})}
						placeholder="Дата выхода"
						error={errors.parameters?.primera}
						style={{ width: '30%' }}
					/>
					<InputField
						{...register('parameters.ratingIMDB', {
							required: 'Рэйтинг IMDB фильма обязательно',
						})}
						placeholder="Рэйтинг IMDB"
						error={errors.parameters?.ratingIMDB}
						style={{ width: '30%' }}
					/>
					<InputField
						{...register('parameters.ratingKp', {
							required: 'Рэйтинг KP фильма обязательно',
						})}
						placeholder="Рэйтинг кинопоиска"
						error={errors.parameters?.ratingKp}
						style={{ width: '30%' }}
					/>

					<Controller
						control={control}
						name="genres"
						render={({ field, fieldState: { error } }) => {
							return (
								<DynamicSelectField
									field={field}
									placeholder={'Жанры фильма'}
									error={error}
									isLoading={isLoadGenres}
									options={genres || []}
									isMulti
								/>
							)
						}}
						rules={{
							required: 'Выберите хотя бы один жанр',
						}}
					/>
						<Controller
						control={control}
						name="acters"
						render={({ field, fieldState: { error } }) => {
							return (
								<DynamicSelectField
									field={field}
									placeholder={'Актеры фильма'}
									error={error}
									isLoading={isLoadGenres}
									options={actors || []}
									isMulti
								/>
							)
						}}
						rules={{
							required: 'Выберите хотя бы один жанр',
						}}
					/>

					<Controller
						control={control}
						name="poster"
						defaultValue=""
						render={({ field: { value, onChange }, fieldState: { error } }) => {
							return (
								<DynamicUploadFile
									value={value}
									onChange={onChange}
									placeholder={'Постер'}
									error={error}
									folder={'posters'}
									isNoImage={false}
								/>
							)
						}}
						rules={{
							required: 'Постер обязателен',
						}}
					/>
					<Controller
						control={control}
						name="bigposter"
						defaultValue=""
						render={({ field: { value, onChange }, fieldState: { error } }) => {
							return (
								<DynamicUploadFile
									value={value}
									onChange={onChange}
									placeholder={'Большой постер'}
									error={error}
									folder={'posters'}
									isNoImage={false}
								/>
							)
						}}
						rules={{
							required: 'Постер обязателен',
						}}
					/>
					<Controller
						control={control}
						name="videoUrl"
						defaultValue=""
						render={({ field: { value, onChange }, fieldState: { error } }) => {
							return (
								<DynamicUploadFile
									value={value}
									onChange={onChange}
									placeholder={'Видео'}
									error={error}
									folder={'movies'}
									isNoImage
									style={{
										display: 'flex',
										justifyContent: 'flex-start',
										marginTop: -25,
										marginBottom: 30,
										marginLeft: 38,
									}}
								/>
							)
						}}
					
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
							placeholder="Описание фильма"
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

export default EditMovie
