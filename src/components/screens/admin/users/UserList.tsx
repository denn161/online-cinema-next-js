import AdminHeader from '@/components/ui/adminheader/AdminHeader'
import AdminNavigation from '@/components/ui/adminnavigation/AdminNavigation'
import AdminTable from '@/components/ui/admintable/AdminTable'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/utils/Meta/Meta'
import useUsers from './useUsers'

const headerItems = ['Почта','Дата регистрации']

const UserList = () => {
	 const {handleSearch,searchTerm,deleteAsync,isLoading,data} =useUsers()
	return (
		<Meta title='Users'>
			<AdminNavigation/>
			<Heading title='Пользовтаели'/>
	    <AdminHeader searchTerm={searchTerm} handleSearch={handleSearch}/>
			<AdminTable isLoading={isLoading} headerItems={headerItems} tableItems={data||[]} removeHandler={deleteAsync} />
		</Meta>
	)
}

export default UserList