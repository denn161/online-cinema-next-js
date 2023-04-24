
import { CSSTransition } from 'react-transition-group'
import SlideItem from './SlideItem'
import { ISlide } from './slider-interface'
import SliderArrow from './sliderArrow/SliderArrow'
import styles from './Slider.module.scss'
import { useSlider } from './useSlider'

interface ISlider{
	 slides:ISlide[] 
	 buttonTitle?:string 
}

const Slieder = ({slides,buttonTitle}:ISlider) => {

   const {handlerArrowClick,currentIndex,isNext,isPrev,slideIn} = useSlider(slides.length)

	return (
		<div className={styles.slider}>

    <CSSTransition in={slideIn} classNames='slide-animation' timeout={300} unmountOnExit>
		<SlideItem item={slides[currentIndex]} buttonTitle={buttonTitle}  />

		</CSSTransition>
     {isPrev && <SliderArrow variant='left' clickHandler={()=>handlerArrowClick('prev')}/>}
		 {isNext && <SliderArrow variant='right' clickHandler={()=>handlerArrowClick('next')}/>}


		</div>
	)
}

export default Slieder