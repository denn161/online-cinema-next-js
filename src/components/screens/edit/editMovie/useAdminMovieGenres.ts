import { IOption} from '@/components/ui/select/select-interface'
import { GenresService } from '@/services/genre-service'
import { errorNotification } from '@/utils/toast-error'
import { useQuery } from 'react-query'


export const useAdminGenres =()=>{

 const queryData = useQuery('get genres list',
 ()=> GenresService.getGenres(),{
	select:({data})=>data.map((genre):IOption=>({value:genre._id,label:genre.name})).sort((a,b)=>{
		const nameA = a.label.toUpperCase(); 
		const nameB = b.label.toUpperCase(); 
		if (nameA < nameB) {
			return -1;
		}
		if (nameA > nameB) {
			return 1;
		}		
		return 0;
	}),
	onError: (error) => errorNotification(error,'Genre list'),
 })

  return queryData

}