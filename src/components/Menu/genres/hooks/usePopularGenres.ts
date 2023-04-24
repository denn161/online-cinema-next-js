import { getGenreUrl } from '@/config/url-config'
import { GenresService } from '@/services/genre-service'
import { TMaterialIconName } from '@/shared/types/icon-types'
import { useQuery } from 'react-query'
import { IMenuItem } from '../../menu-interface'

export const usePopularGenres = () => {
	const queryData = useQuery(
		'popular genre menu',
		() => {
			return GenresService.getGenres()
		},
		{
			select: ({ data }) =>
				data.filter((genre)=>genre.icon)
					?.map((item) => {
						return {
							title: item?.name,
							icon: item.icon,
							path:getGenreUrl(item?.slug),
						} as IMenuItem
					})
					.splice(0, 5),
		}
	)

	return queryData
}
