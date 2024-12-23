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
                    <video
                        ref={videoRef}
                        tabIndex="0"
                        preload="auto"
                        loop
                        playsInline
                        aria-label="video"
                        className={style.video}
                    >
                        <source
                            src="https://player.vimeo.com/progressive_redirect/playback/1020779838/rendition/1080p/file.mp4?loc=external&log_user=0&signature=9ba3a4666a832088f884916ad0231348d918f898f02f5f1f95bce0c940e2befb"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    )
}

