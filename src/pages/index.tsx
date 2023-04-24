import Image from 'next/image'
import { Inter } from 'next/font/google'
import Home from '@/components/screens/home/Home'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { MovieService } from '@/services/movie-service'
import { ISlide } from '@/components/ui/slider/slider-interface'
import { getActersUrl, getMovieUrl } from '@/config/url-config'
import { getGenreList } from '@/utils/getGenresListEach'
import { IHome } from '@/components/screens/home/types'
import { IGalleryItem } from '@/components/ui/gallery/gallery-interface'
import { MdVoiceChat } from 'react-icons/md'
import { ActerService } from '@/services/acter-service'
import { sklonenie } from '@/utils/sklonenie-word'



const inter = Inter({ subsets: ['latin'] })

export const getStaticProps:GetStaticProps=async()=>{
	try {
		  const {data:movies} = await MovieService.getMovieList()  		
 
		 const datatrendingMovies = await MovieService.getMostPopularMovies()

			const {data:dataActors} = await ActerService.getAllActers()

	const slides:ISlide[]=movies.slice(0,5).map((movie)=>({
		_id:movie._id,
		link:getMovieUrl(movie.slug),
		bigposter:movie.bigposter,
		title:movie.title,
		subtitle:getGenreList(movie.genres)
		
	}))		

	   const trendingMovies:IGalleryItem[] =datatrendingMovies.slice(0,5).map((movie)=>({
			posterPath:movie.poster,
			name:movie.title,
			link:getMovieUrl(movie.slug),

		})) 

		const actors:IGalleryItem[] =dataActors.slice(0,6).map((actor)=>({
			 name:actor.name,
			 posterPath:actor.photo,
			 link:getActersUrl(actor.slug),
			 content:{
				 title:actor.name,
				 subtitle:!!actor.countMovies&&`+${actor.countMovies}${sklonenie(actor.countMovies,['фильм','фильма','фильмов'])}`
			 }
		}))

	return {
		 props:{
			 slides,
			 actors,
			 trendingMovies
		 } as IHome ,
		 revalidate:60
	}

	} catch (error) {
		 return {
			props:{
				 slides:[],
				 actors:[],
				 trendingMovies:[]
			} as IHome
		 }
		
	}
}

export default function HomePage({slides,actors,trendingMovies}: InferGetStaticPropsType<typeof getStaticProps>) {
	
	return (
		 <>
		  <Home slides={slides} actors={actors} trendingMovies={trendingMovies} />		 
		 </>
	)
}

