import { IActer } from '@/shared/types/acter-types'
import { IGenre } from '@/shared/types/genre-types'

type TEl = IGenre|IActer 

export const sortedElements =(a:TEl,b:TEl)=>{
	const nameA = a.name.toUpperCase().charAt(0); 
	const nameB = b.name.toUpperCase().charAt(0); 
	 
	if (nameA < nameB) {
		return -1;
	}
	if (nameA > nameB) {
		return 1;
	}				
	return 0;
}