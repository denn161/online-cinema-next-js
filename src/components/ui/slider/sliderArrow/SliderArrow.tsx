
import MaterialIcon from '../../MaterialIcon'
import styles from './SliderArrow.module.scss'
import cn from 'classnames'


interface IArrowSlider{
	 variant:'left'|'right' 
	 clickHandler:()=>void
}
const SliderArrow = ({clickHandler,variant}:IArrowSlider) => {

	const isLeft = variant==='left' 
	return (
		<button onClick={clickHandler} className={cn(styles.arrow,{
			[styles.left]:isLeft,
			[styles.right]:!isLeft
		})}>
			<MaterialIcon name={isLeft ?"MdChevronLeft":"MdChevronRight"}/>
		</button>
	)
}

export default SliderArrow