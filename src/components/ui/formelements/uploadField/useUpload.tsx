import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { useMutation } from 'react-query'

import { FileService } from '@/services/file-service'

import { errorNotification } from '@/utils/toast-error'

type TypeUpload = (
	onChange: (...event: any[]) => void,
	folder?: string
) => {
	uploadFile: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
	isLoading: boolean
}

const useUpload: TypeUpload = (onChange, folder) => {
	const [isLoading, setIsLoading] = useState(false)
	const { mutateAsync: uploadFileAsync } = useMutation(
		'upload files in admin panel',
		async (data: FormData) => FileService.upload(data, folder),
		{
			onSuccess: ({ data }) => {
				onChange(data[0].url)
			},
			onError: (error) => errorNotification(error, 'Ошибка при загрузке файла'),
		}
	)

	const uploadFile = useCallback(
		async (e: ChangeEvent<HTMLInputElement>) => {
			setIsLoading(true)
			const files = e.target.files
		    console.log(files?.length&&files[0])
			if (!files?.length) return
			const formaData = new FormData()
			formaData.append('file', files[0])
		
			await uploadFileAsync(formaData)
			setTimeout(() => {
				setIsLoading(false)
			}, 1000)
		},
		[uploadFileAsync]
	)
	return useMemo(()=>({isLoading,uploadFile}),[isLoading,uploadFile])
}

export default useUpload
