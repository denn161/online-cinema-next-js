import Layout from '@/components/layout/Layout'
import Gallery from '@/components/ui/gallery/Gallery'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/heading/SubHeading'
import Slieder from '@/components/ui/slider/Slieder'
import AutoSwiper from '@/components/ui/swiperSlider/AutoSwiper'

import Meta from '@/utils/Meta/Meta'

import { IHome } from './types'

const Home = ({ slides, actors, trendingMovies }: IHome) => {
	return (
		<Meta
			title="Смотреть фильмы онлайн"
			description="Смотрите фильмы онлайн для удовольствия"
		>
			<Heading
				title="Смотерть фильмы онлайн"
				className="text-gray-300 mb-8 text-xl"
			/>
			{!!slides.length && <Slieder slides={slides} />}
			<div className="my-10 ">
				<SubHeading title="Популярные фильмы" />
				{!!trendingMovies.length && <AutoSwiper items={trendingMovies} variant='vertical' />}
			</div>
			<div className="my-10 ">
				<SubHeading title="Актеры" />
				{!!actors.length && <AutoSwiper items={actors} variant='vertical' />}
			</div>
		</Meta>
	)
}

export default Home
