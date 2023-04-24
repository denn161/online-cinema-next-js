import useRenderClient from '@/hooks/useRenderClient'
import { TMaterialIconName } from '@/shared/types/icon-types'
import * as MaterialIcons from 'react-icons/md' 


const MaterialIcon = ({name}:{name:TMaterialIconName}) => {
   
	  	     
const IconComponent = MaterialIcons[name]
  
return (
	  <>
		 {IconComponent?(<IconComponent/>):(<MaterialIcons.MdDragIndicator/>)}
		</>
)
   
}

export default MaterialIcon