
import { IUploadField } from './upload-file-interface'
import styles from './UploadFile.module.scss'
import useUpload from './useUpload'
import cn from 'classnames'
import SkeletonLoader from '../../SkeletonLoader'
import Image from 'next/image'


const UploadFile = ({onChange,placeholder,error,value,style,folder,isNoImage=false}:IUploadField) => {
   
	const {isLoading,uploadFile} = useUpload(onChange,folder)
   
	return (
		<div className={cn(styles.field,styles.upload__field)} style={style} >
			<div className={styles.upload__flex}>
				<label>
					<span>{placeholder}</span>
					<input type="file" accept='image/*,video/*' onChange={uploadFile} />
					{error&& <div className={styles.error}>{error.message}</div>}
				</label>
				{!isNoImage&& <div className={styles.upload__container}>
					  {isLoading && <SkeletonLoader count={1} className='h-full w-full'/>}
						{value&& <img src={value} alt='' className='mt-4 rounded-image hover:scale-110 cursor-pointer transition-transform'/>}
					</div>}
			</div>
			
		</div>
	)
}

export default UploadFile