import Description from '@/components/ui/heading/Description'

import { IContentList } from '@/shared/types/movies-types'

import { getGenreList } from '@/utils/getGenresListEach'

import styles from './Content.module.scss'
import MoviePage from '@/pages/movie/[slug]'
import { sklonenie } from '@/utils/sklonenie-word'

interface ICList {
	movie: IContentList
}
const ContentList = ({
	movie: { description, originalName, parameters, acters,genres },
}: ICList) => {
             const lengthDirectory =parameters.director.split(',').length
						//  const lengthCountry = parameters.country.split(',').length
	return (
		<div className={styles.content__list}>
			<Description text={description} />
			<ul className={styles.list}>
				<li>
					Оригинальное название:<span>{originalName}</span>
				</li>
				<li>
					Год выпуска:<span>{parameters.year}</span>
				</li>
				<li>
				 {sklonenie(lengthDirectory,['Режисер','Режисеры',''])}:<span>{parameters.director}</span>
				</li>
				<li>
					Страна:<span>{parameters.country}</span>
				</li>
				<li>
					Жанр:<span>{getGenreList(genres)}</span>
				</li>
				<li>
					Актеры:<span>{acters.map((acter) => acter.name).join(',')}</span>
				</li>
				<li>
					Примьера:<span>{parameters.primera}</span>
				</li>			
				<li>
					Продолжительность:<span>{parameters.duration}мин/</span><span>{parameters.hours}</span>
				</li>		
			</ul>
			<div className='flex items-center gap-4 mt-6 w-1/2'>
				 <div data-text='kp' className={styles.kp}>{parameters.ratingKp}</div>
				 <div data-text='imdb' className={styles.db}>{parameters.ratingIMDB}</div>
			</div>
		</div>
	)
}

export default ContentList
