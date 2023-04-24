import { useAuth } from '@/hooks/useAuth'
import { RatingService } from '@/services/rating-service'
import { errorNotification } from '@/utils/toast-error'
import { gsap } from 'gsap'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import styles from './RatingMovie.module.scss'

export const useRatingMovie = (movieId:string) => {
	const [valueRating, setValueRating] = useState(0)
	const [isSend,setIsSend]=useState(false)
	const ratingRef = useRef<HTMLUListElement>(null)
	       const {user}=useAuth()
	const handleClickRating = useCallback(() => {	
		const rating = ratingRef.current     
		if (rating) {
			const entries = rating.querySelectorAll('li')
      const entriesArray = Array.from(entries) 				
			entriesArray.forEach(function (entry, index) {
				entry.addEventListener('click', (e:any) => {					   
				const active =entriesArray.filter(
						(e, i) => i >= index && !e.classList.contains('active')
					)
					const inactive = entriesArray.filter(
						(e, i) => i < index && e.classList.contains('active')
					)	
					if (active.length) {
						gsap.to(active.reverse(), {
							onStart() {
								this._targets.forEach((e: any) =>
									e.classList.add('active', 'activeColor')
								)
							},

							onComplete() {
								this._targets.forEach((e: any) =>
									e.classList.add('active', 'activeColor')
								)
							},
							keyframes: [
								{
									'--star-scale': 0,
									'--star-y': 0,
									duration: 0,
								},
								{
									'--star-scale': 1,
									'--dot-scale': 0,
									duration: 0.9,
									ease: 'elastic.out(1, .7)',
									stagger: 0.03,
								},
							],
						})
					}
					if (inactive.length) {
						gsap.to(inactive, {
							onStart() {
								this._targets.forEach((e: any) =>
									e.classList.remove('activeColor')
								)
							},
							onComplete() {
								this._targets.forEach((e: any) => e.classList.remove('active'))
							},
							'--star-before-r': -20,
							'--star-before-y': -8,
							'--star-after-r': 20,
							'--star-after-y': 8,
							duration: 0.65,
							clearProps: true,
						})
						gsap.to(inactive, {
							'--star-o': 0,
							'--star-blur': 10,
							'--star-y': 48,
							'--dot-scale': 0.8,
							duration: 0.5,
							delay: 0.15,
							clearProps: true,
						})
					}
				})
			})			
		}
	},[ratingRef])

	   

		   const {refetch} =useQuery(['get movie rating',movieId],()=>RatingService.getMavieRatingByUser(movieId),{
				 onSuccess:({data})=>setValueRating(data),
				 enabled:!!movieId&&!!user
				
			 })
	  
		 const {mutateAsync:setRating} =useMutation('set new rating',(value:number)=>RatingService.setRating(movieId,value),{
			 onSuccess(){				  
				  toastr.success('Обновление рэйтинга','Рэйтинг фильма обновился')
					 refetch()
				setIsSend(true)			
				setTimeout(()=>{
					  setIsSend(false)
				},2000)
			 },
			 onError(error){
				  errorNotification(error,'Update rate movie')
			 }
		 })
		 const handleClick = useCallback(async(newValue:number)=>{		   
         setValueRating(newValue)
				 await setRating(newValue)
		 },[])

	useEffect(()=>{
		handleClickRating()
	   
	},[])

	return { ratingRef,isSend,handleClick,valueRating }
}
