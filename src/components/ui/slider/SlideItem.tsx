import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

import Button from '../formelements/Button'

import styles from './Slider.module.scss'
import { ISlide } from './slider-interface'

interface ISlideItem {
	item: ISlide
	buttonTitle?: string
}

const SlideItem = ({
	item: { bigposter, link, title, subtitle, _id },
	buttonTitle = 'Смотреть',
}: ISlideItem) => {
	const { push } = useRouter()

	const router = () => {
		push(link)
	}

	return (
		<div className={styles.slider__item}>
			{bigposter && (
				<Image
					className={styles.slider__image}
					src={bigposter}
					alt={title}
					draggable={false}
					unoptimized
					priority
				  layout='fill'
				/>
			)}
			<div className={styles.slider__content}>
				<div className={styles.heading}> {title}</div>
				<div className={styles.subheading}>{subtitle}</div>
				<button className={styles.slider__btn} onClick={router}>{buttonTitle}</button>
			</div>
		</div>
	)
}

export default SlideItem
