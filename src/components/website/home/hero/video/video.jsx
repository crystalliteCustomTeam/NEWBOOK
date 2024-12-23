"use client"
// React
import { useEffect, useState } from "react"
// Css
import style from "./video.module.css"

export default function Video() {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false)

    useEffect(() => {
        setIsVideoLoaded(true);
    }, [])

    return (
        <video
            tabIndex="0"
            preload="none"
            loop
            autoPlay
            muted
            playsInline
            aria-label="video"
            className={style.video}
        >
            {isVideoLoaded && (
                <source 
                    src="https://player.vimeo.com/progressive_redirect/playback/1015023376/rendition/1080p/file.mp4?loc=external&log_user=0&signature=8b5070187e58e4b1ab884eaaa7e559eb0a1da9950479c229fab3d85e830fa455" 
                    type="video/mp4" 
                />
            )}
        </video>
    )
}