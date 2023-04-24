import { useQuery } from 'react-query'

import { IOption } from '@/components/ui/select/select-interface'

import { ActerService } from '@/services/acter-service'

import { errorNotification } from '@/utils/toast-error'

export const useAdminActers = () => {
	const queryData = useQuery(
		'get movie genres',
		() => ActerService.getAllActers(),
		{
			select: ({ data }) =>
				data.map((acter): IOption => ({ value: acter._id, label: acter.name })),
			onError: (error) => errorNotification(error, 'Acter list'),
		}
	)

	return queryData
}
