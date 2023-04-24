import { ReactNode } from 'react'

export interface IMeta{
	  title:string 
		description?:string 
		image?:string |undefined
		children:ReactNode
}