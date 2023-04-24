import { TInputPropsField } from '../formelements/form-interface'
import {Options} from 'react-select'
import { ControllerRenderProps } from 'react-hook-form'

export interface IOption{
	  value:string 
		label:string
}
export interface ISelect extends TInputPropsField{
	  options:Options<IOption>
		isMulti?:boolean
		field:ControllerRenderProps<any,any>
		isLoading?:boolean
}