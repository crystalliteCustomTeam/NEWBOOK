"use client"
// React
import React, { useRef, useEffect } from "react"
// Fancybox
import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"

export default function FancyBox({ delegate, options, className, children }) {
    const containerRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current

        const delegateSelector = delegate || "[data-fancybox]"
        const fancyboxOptions = options || {}

        NativeFancybox.bind(container, delegateSelector, fancyboxOptions)

        return () => {
            NativeFancybox.unbind(container)
            NativeFancybox.close()
        };
    }, [delegate, options])

    return (
        <div ref={containerRef} className={className}>
            {children}
        </div>
    )
}