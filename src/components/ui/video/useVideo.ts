import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { IVideoElement } from './video-interface'

export const useVideo = () => {
	const [isPlaying, setIsPlaying] = useState(false)
	const [currentTime, setCurrentime] = useState(0)
	const [videoTime, setVideoTime] = useState(0)
	const [progress, setProgress] = useState(0)
 
	const videoRef = useRef<IVideoElement>(null) 

	const toggleVideo = useCallback( () => {
		if (!isPlaying) {
		 	videoRef.current?.play()
			setIsPlaying(true)
		} else {
			videoRef.current?.pause()
			setIsPlaying(false)
		}
	}, [isPlaying, videoRef])

	const forward = useCallback(() => {
		if (videoRef.current) videoRef.current.currentTime += 10
	},[videoRef])

	const revert = useCallback(() => {
		if (videoRef.current) videoRef.current.currentTime -= 10
	},[videoRef])
	const fullScreen = () => {
		const video = videoRef.current
		if (!video) return
		if (video.requestFullscreen) {
			video.requestFullscreen()
		} else if (video.msRequestFullScreen) {
			video.msRequestFullScreen()
		} else if (video.webkitRequestFullScreen) {
			video.webkitRequestFullScreen()
		} else if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen()
		}
	}
	useEffect(() => {
		const duration = videoRef.current?.duration
		if (duration) {
			setVideoTime(duration)
		}
	}, [videoRef.current?.duration])

	useEffect(() => {
		const video = videoRef.current
		if (!video) return
		const updateProgressBar = () => {
			setCurrentime(video.currentTime)
			const percent = (video.currentTime / videoTime) * 100
			setProgress(percent)
		}

		video.addEventListener('timeupdate', updateProgressBar,{capture:true})

		return () => {
			video.removeEventListener('timeupdate', updateProgressBar,{capture:true})
		}
	}, [videoTime])

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			 console.log(e.target)
			switch (e.key) {
				case 'ArrowRight':
					forward()
					break
				case 'ArrowLeft':
					revert()
					break
				case ' ': {
					e.preventDefault()
					toggleVideo()
					break
				}
				case 'f':
					fullScreen()
					break

				default:
					return
			}
		}
		document.addEventListener('keydown', handleKeyDown)
		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [toggleVideo])

	

	
	return useMemo(()=>({
    videoRef,currentTime,progress,revert,forward,fullScreen,isPlaying,toggleVideo,videoTime
	}),[videoRef,currentTime,progress,revert,forward,fullScreen,isPlaying,toggleVideo,videoTime])
}
