import { spawn } from 'child_process'
import cn from 'classnames'
import { forwardRef } from 'react'

import styles from './Form.module.scss'
import { TInputPropsField } from './form-interface'

const InputField = forwardRef<HTMLInputElement, TInputPropsField>(
	({ error, placeholder, type = 'text', style, ...rest }, ref) => {
		return (
			<div style={style} className={cn(styles.common, styles.field)}>
				<label>
					<span className={styles.placeholder}>{placeholder}</span>
					<input type={type} autoComplete='on' ref={ref} {...rest} />
				</label>
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	}
)

InputField.displayName = 'InputField'
export default InputField
