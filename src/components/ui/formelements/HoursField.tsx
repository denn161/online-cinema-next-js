
import { FieldError, UseFormRegister } from 'react-hook-form'
import styles from './Form.module.scss'
import cn from 'classnames'
import InputField from './InputField'

interface IHoursField{
	 error?:FieldError
	 register:UseFormRegister<any>
	 generate:()=>void
	 className?:string	
}

const HoursField = ({error,register,generate,className}:IHoursField) => {
 
	return (
		<div className={`${cn(styles.slug__field)} ${className}`}>
    	<InputField {...register('parameters.hours',{
						required:'Часы фильма обязательны'
					})} placeholder='Часы' error={error}/>
					<div className={styles.badge} onClick={generate}>
              Часы
					</div>
		</div>
	)
}

export default HoursField