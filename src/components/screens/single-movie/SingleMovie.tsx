import dynamic from 'next/dynamic'


import Banner from '@/components/ui/banner/Banner'
import SubHeading from '@/components/ui/heading/SubHeading'
import AutoSwiper from '@/components/ui/swiperSlider/AutoSwiper'

import Meta from '@/utils/Meta/Meta'

import Content from './content/Content'
import ContentList from './content/ContentList'
import { ISingleMovie } from './single-movie-interface'
import RatingMovie from './rating-movie/RatingMovie'
import { useAuth } from '@/hooks/useAuth'
import { useUpdateCountOpened } from './useUpdateCountOpened'
import FavoriteButton from './favorite-button/FavoriteButton'

const DynamicVideoPlayer = dynamic(
	() => import('@/components/ui/video/Video'),
	{
		ssr: false,
	}
)
 const DynamicRatingMovie = dynamic(()=>import('./rating-movie/RatingMovie'),{
	ssr:false
 })
const SingleMovie = ({ similarMovies, movie }: ISingleMovie) => {
      useUpdateCountOpened(movie.slug)
      
	return (
		<Meta title={movie.title} description={`Смотреть онлайн ${movie.title}`}>
			<Banner
				posterPath={movie.bigposter}
				title={movie.title}
				raiting={movie.rating}
				movieId={movie._id}
			/>
			<section className="min-h-screen ">
				<ContentList movie={movie} />
				<DynamicVideoPlayer slug={movie.slug} videoSource={movie.videoUrl} />
				<div className="mt-12">
					<SubHeading title="С этим смотрят" className="mb-5" />
					<AutoSwiper items={similarMovies} variant="vertical" />
				</div>
			<DynamicRatingMovie movie={movie} maxValue={5}/>
			</section>
		</Meta>
	)
}

export default SingleMovie
