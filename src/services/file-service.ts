import { IUploadFileResponse } from '@/components/ui/formelements/uploadField/upload-file-interface'
import { getUploadFilesUrl } from '@/config/api-config'
import instance from 'api'

 const getHeaders =()=> ({
	"Content-Type":"multipart/form-data"
 })

export const FileService = {
 
  async upload(file:FormData,folder?:string,){
		    
		  return instance.post<IUploadFileResponse[]>(getUploadFilesUrl(),file,{
        params:{folder},
				headers:getHeaders()
			})
	}
 

}