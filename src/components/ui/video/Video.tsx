import React from 'react'
import cn from 'classnames'
import { useSelector } from '@/hooks/useTypedSelector'

import { userSelector } from '@/store/selectors/userSelector'

import AuthPlaceholder from './AuthPlaceholder/AuthPlaceholder'
import styles from './Video.module.scss'
import { useVideo } from './useVideo'
import { IVideoPlayer } from './video-interface'
import { useAuth } from '@/hooks/useAuth'
import MaterialIcon from '../MaterialIcon'

const VideoPlayer = ({ slug, videoSource }: IVideoPlayer) => {	
	const {
		videoRef,
		progress,
		revert,
		forward,
		fullScreen,
		currentTime,
		videoTime,
		isPlaying,
		toggleVideo,
	} = useVideo()  
	
	const { user } = useAuth()
	return (
		<div className={cn(styles.wrapper,{
			'h-96':!user
		})}>
		 {!user?<AuthPlaceholder slug={slug}/>:   
		<>
		 	<video ref={videoRef} className={styles.video} src={`${videoSource}#t=8`} preload='metadata'/>
			<div className={styles.progressbar}>			
			    <div className={styles.line__container}>
					<div className={styles.progressbar__line} style={{width:`${progress}%`}}>					
				</div>
					</div>
				<div className={styles.progressbar__controls}>
					<div className={styles.actions}>
					<button onClick={revert}>
							<MaterialIcon name='MdHistory'/>
						</button>
						<button onClick={toggleVideo}>
							<MaterialIcon name={isPlaying?'MdPause':'MdPlayArrow'}/>
						</button>
						<button onClick={forward}>
							<MaterialIcon name='MdUpdate'/>
						</button>
					</div>
					 <div className={styles.progressbar__times}>
						 <p className={styles.progressbar__time}>
							 {Math.floor(currentTime/60)+':'+('0'+Math.floor(currentTime%60)).slice(-2)}
						 </p>
						 <span>/</span>
						 <p className={styles.progressbar__time}>
							 {Math.floor(videoTime/60)+':'+('0'+Math.floor(videoTime%60)).slice(-2)}
						 </p>
					 </div>					
				</div>
				<div className={styles.progressbar__fullscreen}>
						<button onClick={fullScreen}>
							<MaterialIcon name='MdFullscreen'/>
						</button>
					</div>
			</div>
		</>
}
		</div>
	)
}

export default VideoPlayer
