import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/images/cinema.png'
const Logo = () => {
	return (
		<Link href={'/'} className="px-layout flex items-center gap-4 mb-10">
			<Image src={logo} alt={'Logo'} width={50} height={50} draggable={false} />
			<span className='text-xl uppercase hover:text-primary transition-all ease-in-out duration-400'>Online cinema</span>
		</Link>
	)
}

export default Logo
