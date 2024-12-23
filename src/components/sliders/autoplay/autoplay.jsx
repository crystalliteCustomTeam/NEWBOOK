"use client"
// Embla
import useEmblaCarousel from "embla-carousel-react"
import ClassNames from "embla-carousel-class-names"
import Autoplay from "embla-carousel-autoplay"
// Components
import { PrevButton, NextButton, usePrevNextButtons } from "../sliderarrows/sliderarrows"

export default function AutoPlaySlider({
    wrapperClasses = "",
    emblaWrapper = "flex [margin-left:calc(1rem_*_-1)]",
    options,
    align = "start",
    children,
    arrows = true,
    arrowsCss,
}) {
    const plugins = [
        ClassNames(),
        Autoplay({ delay: 3000, stopOnFocusIn: false, stopOnInteraction: false })
    ]
    const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true, align: align, loop: true, ...options }, plugins)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <>
            <div className={`overflow-hidden ${wrapperClasses}`} ref={emblaRef}>
                <div className={emblaWrapper}>
                    {children}
                </div>
            </div>
            {arrows && <div className={`flex gap-10 justify-between mt-10 ${arrowsCss}`}>
                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>}
        </>
    )
}