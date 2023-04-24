import ReactSelect, { OnChangeValue } from 'react-select'
import makeAnimated from 'react-select/animated'

import styles from './SelectField.module.scss'

import { IOption, ISelect } from './select-interface'

const animated = makeAnimated()

const SelectField = ({
	onChange,
	options,
	isLoading,
	field,
	isMulti,
	error,
	placeholder,
}: ISelect) => {

	const handleChange = (newValue:unknown| OnChangeValue<IOption, boolean>) => {
		field.onChange(
			isMulti
				? (newValue as IOption[]).map((item) => item.value)
				: (newValue as IOption).value
		)
	}
	const getValue = () => {		
		if (field.value) {
			return isMulti
			? options.filter((option) =>field.value.includes(option.value) )
			: options.find((option) => option.value === field.value)
		}
	   else return isMulti ? [] : ''
	}
	return (
		<div className={styles.select__container}>
			<label>
				<span className='text-gray-600'>{placeholder}</span>
				<ReactSelect
				  classNamePrefix={'custom-select'}
					options={options}
					value={getValue()}
					isMulti={isMulti}
					onChange={handleChange} 
					components={animated}
					isLoading={isLoading}
				/>
			</label>
			{error && <div className={styles.error}>{error.message}</div>}
		</div>
	)
}

export default SelectField
