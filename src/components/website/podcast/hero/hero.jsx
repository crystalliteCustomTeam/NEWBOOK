// Next
import Image from "next/image"
// Css
import style from "./hero.module.css"
// Media
import Bg from "media/podcast/hero-bg.png"
import Avaters from "media/podcast/listeners.png"
// Components
import { CTAGroupDark } from "@/components"
import Slider from "./slider/slider"
import { AudioPlayer } from "../index"

export default function Hero() {
  const data = [
    { src: "/podcast/audios/1.mp3" },
    { src: "/podcast/audios/2.mp3" },
    { src: "/podcast/audios/3.mp3" },
    { src: "/podcast/audios/4.mp3" },
    { src: "/podcast/audios/5.mp3" },
  ]
  return (
    <>
      <section>
        <div className={style.root}>
          <Image src={Bg} alt="domain" fill priority className={style.bg} />
          <div className="container">
            <div className="relative">
            <div>
              <h1 className={style.title}>
                Unleash Your Voice. Share Your Story. Join Carlene Cross Podcast
              </h1>
              <p className={style.para}>
                Scelerisque dignissim pellentesque parturient ornare in viverra
                feugiat id non vel enim purus ut eget.
              </p>
              <div className={style.cta}>
                <CTAGroupDark />
              </div>
              <div className="flex items-center gap-x-5 mt-8">
                <Image src={Avaters} alt="domain" />
                <span className={style.para}>Worldwide Listeners</span>
              </div>
            </div>
            <div className="bg-white rounded-[26px] shadow-[0px_4px_50px_0px_#0000001A] lg:py-[60px] p-[30px] lg:px-[40px] absolute lg:translate-y-32 translate-y-10 left-0 right-0">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-y-10 gap-x-5 xl:items-end items-center">
                <div className="relative">
                  <Slider />
                </div>
                <div >
                  <div className="md:max-w-[90%] ml-auto">
                  <AudioPlayer tracks={data} />
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
