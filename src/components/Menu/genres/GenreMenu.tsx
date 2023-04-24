import Skeleton from 'react-loading-skeleton'

import Menu from '../Menu'
import MenuList from '../MenuList'
import { IMenuItem } from '../menu-interface'

import { usePopularGenres } from './hooks/usePopularGenres'
import SkeletonLoader from '@/components/ui/SkeletonLoader'

const GenreMenu = () => {
	const { isLoading, data } = usePopularGenres()

	return (
		<>
			{isLoading ? (
			  <SkeletonLoader count={5} className='h-7 mt-6' />
			) : (
				<MenuList title="Popular genres" items={data || []} />
			)}
		</>
	)
}

export default GenreMenu
