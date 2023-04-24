import { IHeading } from './types'


 

const Heading = ({title,className}:IHeading) => {

	return (
		<h1 className={`text-white font-semibold text-opacity-80 ${className?.includes('xl')?'':'text-3xl'} ${className}`}>
			{title}
		</h1>
	)
}

export default Heading