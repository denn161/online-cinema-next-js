import { IEditGenreInput } from '@/components/screens/edit/editGenre/edit-genre-interface'
import { FieldError, UseFormRegister } from 'react-hook-form'
import styles from './Form.module.scss'
import cn from 'classnames'
import InputField from './InputField'

interface ISlugField{
	 error?:FieldError
	 register:UseFormRegister<any>
	 generate:()=>void
	 className?:string
	
}

const SlugField = ({error,register,generate,className}:ISlugField) => {
 
	return (
		<div className={`${cn(styles.slug__field)} ${className}`}>
    	<InputField {...register('slug',{
						required:'Слаг жанра обязателен'
					})} placeholder='Слаг жанра' error={error}/>
					<div className={styles.badge} onClick={generate}>
              Слаг
					</div>
		</div>
	)
}

export default SlugField