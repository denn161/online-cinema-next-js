import { CSSProperties } from 'react'
import { FieldError } from 'react-hook-form'

export interface IUploadFileResponse{
	 name:string 
	 url:string
}

export interface IUploadField{
	folder?:string 
	value?:string 
	onChange:(...event:any[])=>void
	placeholder:string 
	error?:FieldError 
	style?:CSSProperties 
	isNoImage?:boolean
}