"use client"
// Embla
import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from "embla-carousel-auto-scroll"
import ClassNames from "embla-carousel-class-names"

export default function AutoScrollSlider({
    direction = "forward",
    wrapperCss = "",
    emblaWrapper = "flex [margin-left:calc(1rem_*_-1)] items-center",
    align = "start",
    children
}) {
    const plugins = [
        ClassNames(),
        AutoScroll({ playOnInit: true, speed: 0.5, stopOnInteraction: false, stopOnMouseEnter: true, stopOnFocusIn: false, direction })
    ]

    const [emblaRef] = useEmblaCarousel({ align: align, dragFree: true, loop: true }, plugins)

    return (
        <div className={`overflow-hidden ${wrapperCss}`} ref={emblaRef}>
            <div className={emblaWrapper}>
                {children}
            </div>
        </div>
    )
}