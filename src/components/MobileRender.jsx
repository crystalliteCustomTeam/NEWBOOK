"use client"
// React
import { useState, useEffect } from "react"

export default function MobileRender({ children }) {
    const [shouldRender, setShouldRender] = useState(true)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 576) {
                setShouldRender(false)
            } else {
                setShouldRender(true)
            }
        }

        handleResize()
        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    if (!shouldRender) {
        return null
    }

    return children
}