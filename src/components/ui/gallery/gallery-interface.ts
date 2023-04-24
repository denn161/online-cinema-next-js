export interface IGalleryItem{
	posterPath:string 
	name:string 
	link:string 
	content?:{
		title:string 
		subtitle?:string|boolean
	}
}

export interface IGallleryItemProps{
	 item:IGalleryItem
	 variant:'vertical'|'gorizontal'
	  
}

export interface IGallery{
	 items:IGalleryItem[]
}