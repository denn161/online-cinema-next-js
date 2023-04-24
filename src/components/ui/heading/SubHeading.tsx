import React from 'react'
import { IHeading } from './types'

const SubHeading = ({title,className}:IHeading) => {
	return (
		<h4 className={`text-white font-semibold text-opacity-80 ${className?.includes('xl')?'':'text-lg'} ${className}`}>
		{title}
	</h4>
	)
}

export default SubHeading