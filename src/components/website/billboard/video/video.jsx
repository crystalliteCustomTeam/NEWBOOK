"use client"
// React
import React, { useRef, useEffect } from "react"
// Framer
import { useInView } from "framer-motion"
// Css
import style from "./video.module.css"

export default function Video() {
    const videoRef = useRef(null)
    const isInView = useInView(videoRef, { once: true })

    useEffect(() => {
        const videoElement = videoRef.current

        if (isInView && videoRef.current) {
            videoRef.current.play().catch(error => {
                console.error("Error trying to play the video:", error)
            })
        }

        const handleContextMenu = (event) => {
            event.preventDefault()
        }

        if (videoElement) {
            videoElement.addEventListener('contextmenu', handleContextMenu)
        }

        return () => {
            if (videoElement) {
                videoElement.removeEventListener('contextmenu', handleContextMenu)
            }
        }
    }, [isInView])

    return (
        <section>
            <div className={style.root}>
                <div className="container">
                    <div className={style.content}>
                        <h2 className={style.title}>Times Square Billboard Advertising.</h2>
                    </div>
                    <video
                        ref={videoRef}
                        tabIndex="0"
                        preload="metadata"
                        loop
                        playsInline
                        aria-label="video"
                        className={style.video}
                    >
                        <source
                            src="https://player.vimeo.com/progressive_redirect/playback/1015023376/rendition/1080p/file.mp4?loc=external&log_user=0&signature=8b5070187e58e4b1ab884eaaa7e559eb0a1da9950479c229fab3d85e830fa455"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    )
}

