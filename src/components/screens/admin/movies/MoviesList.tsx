import AdminHeader from '@/components/ui/adminheader/AdminHeader'
import AdminNavigation from '@/components/ui/adminnavigation/AdminNavigation'
import AdminTable from '@/components/ui/admintable/AdminTable'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/utils/Meta/Meta'
import { useMovies } from './useMovies'

const headerItems =['Название фильма','Жанры','Рэйтинг']

const MoviesList = () => {
	const {handleSearch,searchTerm,deleteAsync,isLoading,data,createMovie} =useMovies()
	return (
		<Meta title='Фильмы'>
			<AdminNavigation/> 
			<Heading title='Фильмы'/>
			<AdminHeader searchTerm={searchTerm} handleSearch={handleSearch} onClick={createMovie}/>
			<AdminTable isLoading={isLoading} headerItems={headerItems} tableItems={data||[]} removeHandler={deleteAsync} />

		</Meta>
	)
}

export default MoviesList