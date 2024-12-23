// Css
import style from "./slider.module.css"
// Components
import { AutoPlaySlider } from "@/components"
// Media
import One from "media/podcast/latestPodcast/10.png"
// Next
import Image from "next/image"

const data = [
  {
    img: One,
    duration: "03",
  },
  {
    img: One,
    duration: "06",
  },
  {
    img: One,
    duration: "09",
  },
  {
    img: One,
    duration: "12",
  },
  {
    img: One,
    duration: "19",
  },
]

export default function Slider() {
  return (
    <AutoPlaySlider arrows={true} arrowsCss="absolute w-full top-0">
      {data.map(({ img, duration }, i) => (
        <div key={i} className={style.slides}>
          <div className="flex items-center gap-x-5 xl:px-0 lg:px-10 md:px-6 px-14 md:w-[80%] mx-auto">
            <div className="3xl:basis-[40%] basis-[30%] mb-2 xl:block hidden">
              <Image src={img} alt="domain" className="rounded-xl" />
            </div>
            <div>
              <span className="block font-manrope font-medium xl:text-lg text-base leading-normal text-[#4A4A689E]">
                Rafaelyza
              </span>
              <h4 className="text-black 2xl:text-[24px] xl:text-[20px] text-[18px] leading-tight font-mono my-2">
                How to make Create in Podcast
              </h4>
              <span className="block font-manrope font-medium xl:text-lg text-base leading-normal text-[#4A4A689E] mb-2">
                Episode {++i}
              </span>
              <span className="block font-manrope font-medium xl:text-lg text-base leading-normal text-black">
                0:{duration}
              </span>
            </div>
          </div>
        </div>
      ))}
    </AutoPlaySlider>
  )
}
