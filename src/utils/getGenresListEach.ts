export const getGenresListEach = (index:number,name:string,length:number)=>index+1===length?name:name+','


interface IGenreListItem{
	name:string
	 
}

export const getGenreList  = (arr:IGenreListItem[])=>{
	   return arr.map((item)=>item.name).join(', ')
}