import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/ui/formelements/Button'
import Heading from '@/ui/heading/Heading'

import { useAuth } from '@/hooks/useAuth'
import useAuthRedirect from '@/hooks/useAuthRedirect'

import Meta from '@/utils/Meta/Meta'

import styles from './Auth.module.scss'
import { IFormDate } from './auth-interface'
import AuthFields from './AuthFields'
import { useActions } from '@/hooks/useActions'

const Auth = () => {
	const [type, setType] = useState('login')

	useAuthRedirect()

	const { isLoading} = useAuth()

	const {register,login} =useActions()

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IFormDate>({
		mode: 'onChange',
	})
	
	const onSubmit: SubmitHandler<IFormDate> = (data) => {
		type === 'login' ? login(data) : register(data)
		  reset()  
	}

	return (
		<Meta title="Auth">
			<section className={styles.auth}>
				<form onSubmit={handleSubmit(onSubmit)} className={styles.auth__form}>
					<Heading
						className="mb-6 text-xl"
						title={type === 'login' ? 'Вход' : 'Регистрация'}
					/>
					<AuthFields register={registerInput} formState={formState} isPasswordRequired/>
					<div className={styles.auth__btns}>
						<Button
							disabled={isLoading}
							type="submit"
							onClick={() => setType('login')}
						>
							Войти
						</Button>
						<Button
							disabled={isLoading}
							type="submit"
							onClick={() => setType('register')}
						>
						 Регистрация
						</Button>
					</div>
				</form>
			</section>
		</Meta>
	)
}

export default Auth
