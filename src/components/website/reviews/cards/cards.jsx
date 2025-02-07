"use client"
// React
import { useState, useEffect, useCallback } from "react"
// Embla
import useEmblaCarousel from "embla-carousel-react"
// Media
import Client1 from "media/home/testimonials/clients/7.jpg"
import Client2 from "media/home/testimonials/clients/8.jpg"
import Client3 from "media/home/testimonials/clients/9.jpg"
import Client4 from "media/home/testimonials/clients/10.jpg"
import Client5 from "media/home/testimonials/clients/11.jpg"
import Client6 from "media/home/testimonials/clients/12.jpg"
// Components
import {
  CTAGroupReviews,
  FancyBox,
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/components"
// Next
import Image from "next/image"
// CSS
import styles from "./cards.module.css"

const data1 = [
  [
    "https://player.vimeo.com/progressive_redirect/playback/1054327194/rendition/480p/file.mp4?loc=external&log_user=0&signature=8f0dfe3f3c175ffc3bae8cc20544d7e96bc39d6ef0c983db4d023bd4c3f036f8",
    Client1,
  ],
  [
    "https://player.vimeo.com/progressive_redirect/playback/1054329510/rendition/480p/file.mp4?loc=external&log_user=0&signature=6bc334e5908113b05c127c8426fe9cd75eb8371cedb2ede3531586913081badb",
    Client2,
  ],
  [
    "https://player.vimeo.com/progressive_redirect/playback/1054329459/rendition/480p/file.mp4?loc=external&log_user=0&signature=6326475a0ab0bb06bb4c5080c4995ebf7bb57582925d054a5b003ce79100307c",
    Client3,
  ],
  [
    "https://player.vimeo.com/progressive_redirect/playback/1054329226/rendition/480p/file.mp4?loc=external&log_user=0&signature=db1cfba9f323f8564261c338e257e28be16f425bc838cc70ee4383fb03dccc62",
    Client4,
  ],
  [
    "https://player.vimeo.com/progressive_redirect/playback/1054329401/rendition/480p/file.mp4?loc=external&log_user=0&signature=2e1132f7b832fbce526df27a6814fb9f154e3571befdd1a467d86625be23d7b0",
    Client5,
  ],
  [
    "https://player.vimeo.com/progressive_redirect/playback/1054329295/rendition/480p/file.mp4?loc=external&log_user=0&signature=0b63f54044590187db518f7cff86c058ec350d632b9cc486f0f3f5bcad2b839d",
    Client6,
  ],
]

const data2 = [
  [
    "“I have always heard that getting a book published is no easy feat. That changed for me since I collaborated with teams at Book Marketing.”",
    "Erica Thames",
    "Fiction Writer",
  ],
  [
    "“I got my idea transformed into a book! Thanks to the Book Marketing.”",
    "Danny Morgan",
    "Research and Science Fiction Writer",
  ],
  [
    "“I am impressed with what a remarkable job the Book Marketing did!”",
    "James P",
    "Memoir Author",
  ],
  [
    "“I have always heard that getting a book published is no easy feat. That changed for me since I collaborated with teams at Book Marketing.”",
    "Erica Thames",
    "Fiction Writer",
  ],
  [
    "“I got my idea transformed into a book! Thanks to the Book Marketing.”",
    "Danny Morgan",
    "Research and Science Fiction Writer",
  ],
  [
    "“I am impressed with what a remarkable job the Book Marketing did!”",
    "James P",
    "Memoir Author",
  ],
]

export default function Testimonials() {
  const [_selectedIndex, setSelectedIndex] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" })
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
    onNextButtonClick,
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
        {data1.map(([videoSrc, img], i) => (
          <div key={i} className={styles.embla__slide}>
            <a data-fancybox="gallery" href={videoSrc}>
              <Image src={img} alt="domain" className="mx-auto" />
              <svg
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                width="71"
                height="71"
                viewBox="0 0 71 71"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_b_2260_15927)">
                  <rect
                    x="0.439697"
                    y="0.276367"
                    width="70.5076"
                    height="70.5076"
                    rx="35.2538"
                    fill="#1B1B1D"
                    fillOpacity="0.5"
                  />
                  <path
                    d="M48.4731 34.7671C49.0607 35.1063 49.0607 35.9543 48.4731 36.2936L29.9648 46.9794C29.3773 47.3186 28.6428 46.8946 28.6428 46.2161V24.8446C28.6428 24.1661 29.3773 23.7421 29.9648 24.0813L48.4731 34.7671Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_b_2260_15927"
                    x="-10.1364"
                    y="-10.2998"
                    width="91.6599"
                    height="91.6601"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood fillOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="5.28807"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_2260_15927"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_2260_15927"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </a>
          </div>
        ))}
      </FancyBox>
      <div className={styles.embla_thumbs} ref={emblaThumbsRef}>
        <div className={styles.embla_thumbs__container}>
          {data2.map(([desc, name, position], i) => (
            <div key={i} className={`${styles.embla_thumbs__slide}`}>
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
          ))}
        </div>
        <div className={styles.arrowsRoot}>
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            classes="sm:absolute sm:-left-0"
          />
          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            classes="sm:absolute sm:-right-0"
          />
        </div>
        <div className={styles.cta2}>
          <CTAGroupReviews />
        </div>
      </div>
    </div>
  )
}
