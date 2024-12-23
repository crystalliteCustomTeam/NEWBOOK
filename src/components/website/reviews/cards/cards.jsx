"use client"
// React
import { useState, useEffect, useCallback } from "react"
// Embla
import useEmblaCarousel from "embla-carousel-react"
// Media
import Client1 from "media/home/testimonials/clients/4.png"
import Client2 from "media/home/testimonials/clients/5.png"
import Client3 from "media/home/testimonials/clients/6.png"
// Components 
import { CTAGroupReviews, FancyBox, NextButton, PrevButton, usePrevNextButtons } from "@/components"
// Next
import Image from "next/image"
// CSS
import styles from "./cards.module.css"

const data1 = [
    [Client1],
    [Client2],
    [Client3],
    [Client1],
    [Client2],
    [Client3]
]

const data2 = [
    [
        "“I stumbled upon Book Marketing on chance, and what I thought was a tale to tell to my family, they turned into a story that has created a soul community for me.”",
        "Jeremiah Adams",
        "CEO, Vette, Inc."
    ],
    [
        "“We’re impressed with their entrepreneurial approach to handling their projects. They really put the process in a way that I can understand and help me focus on my responsibilities as a CEO.”",
        "Lila Tanner",
        "CEO, Vette, Inc."
    ],
    [
        "“We’re impressed with their entrepreneurial approach to handling their projects. They really put the process in a way that I can understand and help me focus on my responsibilities as a CEO.”",
        "Sophie Banner",
        "CEO, Vette, Inc."
    ],
    [
        "“We’re impressed with their entrepreneurial approach to handling their projects. They really put the process in a way that I can understand and help me focus on my responsibilities as a CEO.”",
        "Chloe Manor",
        "CEO, Vette, Inc."
    ],
    [
        "“We’re impressed with their entrepreneurial approach to handling their projects. They really put the process in a way that I can understand and help me focus on my responsibilities as a CEO.”",
        "Zoe Lander",
        "CEO, Vette, Inc."
    ],
    [
        "“We’re impressed with their entrepreneurial approach to handling their projects. They really put the process in a way that I can understand and help me focus on my responsibilities as a CEO.”",
        "Maya Carter",
        "CEO, Vette, Inc."
    ],
]

export default function Testimonials() {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", })
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
        containScroll: "keepSnaps",
        dragFree: false,
    })
    const onThumbClick = useCallback(
        (index) => {
            if (!emblaApi || !emblaThumbsApi) return
            emblaApi.scrollTo(index)
        },
        [emblaApi, emblaThumbsApi]
    )

    const onSelect = useCallback(() => {
        if (!emblaApi || !emblaThumbsApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
        emblaThumbsApi.scrollTo(emblaApi.selectedScrollSnap())
    }, [emblaApi, emblaThumbsApi, setSelectedIndex])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()

        emblaApi.on("select", onSelect).on("reInit", onSelect)
    }, [emblaApi, onSelect])
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)
    return (
        <div className={styles.embla} ref={emblaRef}>
            <FancyBox
                options={{
                    Carousel: {
                        infinite: false,
                    },
                }}
                className="flex touch-pan-y ml-[calc(1rem_*_-1)]"
            >
                {
                    data1.map(([img], i) => (
                        <div key={i} className={styles.embla__slide}>
                            <a data-fancybox="gallery" href="https://vimeo.com/1015023376">
                                <Image src={img} alt="domain" />
                                <svg className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_b_2260_15927)">
                                        <rect x="0.439697" y="0.276367" width="70.5076" height="70.5076" rx="35.2538" fill="#1B1B1D" fillOpacity="0.5" />
                                        <path d="M48.4731 34.7671C49.0607 35.1063 49.0607 35.9543 48.4731 36.2936L29.9648 46.9794C29.3773 47.3186 28.6428 46.8946 28.6428 46.2161V24.8446C28.6428 24.1661 29.3773 23.7421 29.9648 24.0813L48.4731 34.7671Z" fill="white" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_b_2260_15927" x="-10.1364" y="-10.2998" width="91.6599" height="91.6601" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood fillOpacity="0" result="BackgroundImageFix" />
                                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="5.28807" />
                                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2260_15927" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2260_15927" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </a>
                        </div>
                    ))
                }
            </FancyBox>
            <div className={styles.embla_thumbs} ref={emblaThumbsRef}>
                <div className={styles.embla_thumbs__container}>
                    {
                        data2.map(([desc, name, position], i) => (
                            <div
                                key={name}
                                className={`${styles.embla_thumbs__slide}`}
                            >
                                <div onClick={() => onThumbClick(i)} className={styles.descCard}>
                                    <div className={styles.__grid}>
                                        <div className={styles.__leftGrid}>
                                            <p className={styles.desc}>{desc}</p>
                                            <span className={styles.clientName}>{name}</span>
                                            <span className={styles.position}>{position}</span>
                                        </div>
                                        <div className={styles.__rightGrid}>
                                            <div className={styles.cta}>
                                                <CTAGroupReviews />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className={styles.arrowsRoot}>
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} classes="sm:absolute sm:-left-0" />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} classes="sm:absolute sm:-right-0" />
                </div>
                <div className={styles.cta2}>
                    <CTAGroupReviews />
                </div>
            </div>
        </div>
    )
};