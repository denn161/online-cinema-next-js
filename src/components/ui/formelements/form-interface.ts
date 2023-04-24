import { EditorProps } from 'draft-js'
import {
	ButtonHTMLAttributes,
	ChangeEvent,
	InputHTMLAttributes,
	ReactNode,
} from 'react'
import { FieldError } from 'react-hook-form'

export type TBtns = 'button' | 'submit' | 'reset' | undefined

export interface IButton {
	children: ReactNode
	onClick?: () => void
	type: TBtns
	disabled?: boolean
	className?: string
}

export interface IFieldINput {
	placeholder: string
	error: FieldError | undefined
}
export type TInputPropsField = InputHTMLAttributes<HTMLInputElement> &
	IFieldINput

//  export interface IField extends TInputPropsField {}

export interface IButtonReact extends ButtonHTMLAttributes<HTMLButtonElement> {}

type TypeEditorPropsField = IFieldINput & EditorProps

export interface ITextEditor extends Omit<TypeEditorPropsField,'editorState'>{
	  onChange:(...e:any[])=>void 
		value:string
}
