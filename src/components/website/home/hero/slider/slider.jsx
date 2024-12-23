// Next
import Image from "next/image"
// Media
import One from "media/home/hero/awards/1.png"
import Two from "media/home/hero/awards/2.png"
import Three from "media/home/hero/awards/3.png"
import Four from "media/home/hero/awards/4.png"
import Five from "media/home/hero/awards/5.png"
import Six from "media/home/hero/awards/6.png"
import Seven from "media/home/hero/awards/7.png"
// Components
import { AutoScrollSlider } from "@/components"
// Css
import style from "./slider.module.css"

const data = [One, Two, Three, Four, Five, Six, Seven, One, Two, Three, Four, Five, Six, Seven]

export default function Slider() {
    return (
        <AutoScrollSlider
            wrapperCss="overflow-hidden mt-[40px] md:mt-[60px] mb-[20px] md:mb-[40px]"
            emblaWrapper="flex [margin-left:calc(30px_*_-1)] md:[margin-left:calc(50px_*_-1)] items-center"
        >
            {
                data.map((e, i) => (
                    <div key={i} className={style.slides}>
                        <Image src={e} alt="domain" />
                    </div>
                ))
            }
        </AutoScrollSlider>
    )
}