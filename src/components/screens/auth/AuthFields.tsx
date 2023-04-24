import { validEmail } from '@/shared/regex'
import InputField from '@/ui/formelements/InputField'
import { FieldError, FormState, UseFormRegister } from 'react-hook-form'

interface IAuthFieldsProps{
	register:UseFormRegister<any> 
	formState:FormState<any>
	isPasswordRequired?:boolean
}
const AuthFields = ({register,formState:{errors},isPasswordRequired=false}:IAuthFieldsProps) => {
	return (
		<>
		 <InputField placeholder='Email' error={errors.email as FieldError} {...register('email',{required:"Email обязателен",pattern:{
			   value:validEmail,
				 message:"Пожалуйста введите валидную почту"
		 }})}/>
		  <InputField placeholder='Password' type={'password'} error={errors.password as FieldError} {...register('password',isPasswordRequired?{required:"Пароль обязателен",minLength:{
				value:6,
				message:'Минимальная длина пароля 6 символов'
			}}:{})} />
		</>
	)
}

export default AuthFields