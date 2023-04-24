import AdminHeader from '@/components/ui/adminheader/AdminHeader'
import AdminNavigation from '@/components/ui/adminnavigation/AdminNavigation'
import AdminTable from '@/components/ui/admintable/AdminTable'
import Heading from '@/components/ui/heading/Heading'
import { useGenres } from './useGenres'

const headerItems =['Название жанра','Слаг']
const GenresList = () => {
  const {handleSearch,searchTerm,deleteAsync,isLoading,data,createGenre} =useGenres()
	return (
		<div>
			<AdminNavigation />
			<Heading title="Жанры" />
			<AdminHeader searchTerm={searchTerm} handleSearch={handleSearch} onClick={createGenre} />
			<AdminTable isLoading={isLoading} headerItems={headerItems} tableItems={data||[]} removeHandler={deleteAsync} />
		</div>
	)
}

export default GenresList
