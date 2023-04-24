import Skeleton, {SkeletonProps} from 'react-loading-skeleton'
import cn from 'classnames'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoader = ({className,...rest}:SkeletonProps) => {
	return (
	  <Skeleton
			{...rest}
			baseColor="#1F2125"
			highlightColor="#292A2E"
			className={cn('rounded-lg', className)}
		/>
	)
}

export default SkeletonLoader