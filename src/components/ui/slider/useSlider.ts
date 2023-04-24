import { useState } from 'react'

export const useSlider = (length:number)=>{
	   const [currentIndex,setCurrentIndex] =useState(0)
		 const [slideIn, setSlideIn] = useState(true) 
      console.log(currentIndex)
		 const isNext = currentIndex===length-1?false:true
		 const isPrev = currentIndex===0?false:true

		 const handlerArrowClick = (direction:'next'|'prev')=>{ 
			 const newIndex = direction==='next'?currentIndex+1:currentIndex-1 

			 setSlideIn(false) 
			 setTimeout(()=>{
				setCurrentIndex(newIndex)
				 setSlideIn(true)
			 },300)
			   
		 }
    
		 return {slideIn,currentIndex,handlerArrowClick,isNext,isPrev}

}