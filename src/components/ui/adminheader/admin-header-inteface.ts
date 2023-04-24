import { ChangeEvent } from 'react'

export interface IAdminHeader{
	  onClick?:()=>void 
		searchTerm:string 
		handleSearch:(e:ChangeEvent<HTMLInputElement>)=>void
}