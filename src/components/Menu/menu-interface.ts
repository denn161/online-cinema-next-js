import { TMaterialIconName } from '@/shared/types/icon-types'

export interface IMenuItem{
	icon:TMaterialIconName
	title:string 
	path:string
}





export interface IMenu{
	    title:string
			items:IMenuItem[]
}