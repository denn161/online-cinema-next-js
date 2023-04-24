
import { Swiper,SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { ReactNode } from 'react'
import { IGalleryItem } from '../gallery/gallery-interface'
import GalleryItem from '../gallery/GalleryItem'

interface IAutoSwiper{
   items:IGalleryItem[]
   variant:'vertical'|'gorizontal'
}
const AutoSwiper = ({items,variant}:IAutoSwiper) => {
  return (    
   <Swiper
     slidesPerView={'auto'}
     
     grabCursor={true}
     style={{width:"100%",height:'max-content',visibility:'visible',paddingTop:"20px"}}
     modules={[Autoplay]}
     autoplay={{
        delay:3000,
        disableOnInteraction:false

     }}
   >
    {!!items.length&&items.map((item)=>
    <SwiperSlide  key={item.link} >
      <GalleryItem item={item} variant={variant}/>
    </SwiperSlide>
    )}
   </Swiper>

    
  )
}

export default AutoSwiper