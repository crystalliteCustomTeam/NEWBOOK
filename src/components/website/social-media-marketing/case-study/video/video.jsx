"use client"
// React
import React, { useRef, useEffect } from "react"
// Framer
import { useInView } from "framer-motion"
// Css
import style from "./video.module.css"

export default function Video({
    src = "https://player.vimeo.com/progressive_redirect/playback/1019612187/rendition/720p/file.mp4?loc=external&log_user=0&signature=553c44abc12a01450456a198eb1ea7925f80b0d41226618e6bfbb9eebaa914b1"
}) {
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
                <video
                    ref={videoRef}
                    tabIndex="0"
                    preload="metadata"
                    loop
                    muted
                    playsInline
                    aria-label="video"
                    className={style.video}
                >
                    <source
                        src={src}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    )
}

