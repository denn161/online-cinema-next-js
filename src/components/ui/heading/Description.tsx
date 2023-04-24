import React, { useState } from 'react'
import parse from 'html-react-parser'
import cn from 'classnames'
import styles from './Description.module.scss'

interface IDescription{
	 text:string 
	 className?:string
}
const Description = ({text,className=''}:IDescription) => {
	    const [showText,setShowText] =useState(true)       

	 const isLength = text.length>500 
			   
	return (
	<>
		<div className={cn(styles.descr,className,{
			[styles.showtext]:showText
		})}>      
			{parse(text)}
			
		</div>
		{isLength &&<div className={styles.show} onClick={()=>setShowText((prev)=>!prev)}>
		{showText?'Развернуть текст':'Свернуть текст'}
		 </div>}
	</>
	)
}

export default Description