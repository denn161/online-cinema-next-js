import cn from 'classnames'

import styles from './Form.module.scss'
import { IButton } from './form-interface'

const Button = ({
	children,
	onClick,
	className,
	disabled,
	type = 'submit',
}: IButton) => {
	return (
		<button
			type={type}
			disabled={disabled}
			onClick={onClick}
			className={cn(styles.btn, className)}
		>
			{children}
		</button>
	)
}

export default Button
