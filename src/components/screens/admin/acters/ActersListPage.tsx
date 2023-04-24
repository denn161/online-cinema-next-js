import AdminHeader from '@/components/ui/adminheader/AdminHeader'
import AdminNavigation from '@/components/ui/adminnavigation/AdminNavigation'
import AdminTable from '@/components/ui/admintable/AdminTable'
import Heading from '@/components/ui/heading/Heading'
import { useActers } from './useActers'

const headerItems =['Актер','Количество фильмов']
const ActersListPage = () => {

	const {handleSearch,searchTerm,deleteAsync,isLoading,data,createActer} =useActers()
	return (
		<div>
			<AdminNavigation />
			<Heading title="Актеры" />
			<AdminHeader searchTerm={searchTerm} handleSearch={handleSearch} onClick={createActer}/>
			<AdminTable isLoading={isLoading} headerItems={headerItems} tableItems={data||[]} removeHandler={deleteAsync} />
		</div>
	)
}
export default ActersListPage
