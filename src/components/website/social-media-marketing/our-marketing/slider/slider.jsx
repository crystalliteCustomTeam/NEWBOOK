// Css
import style from "./slider.module.css"
// Components
import { AutoPlaySlider } from "@/components"
// Media
import One from "media/social-media-marketing/our-marketing/1.png"
import Two from "media/social-media-marketing/our-marketing/2.png"
import Three from "media/social-media-marketing/our-marketing/3.png"
// Next
import Image from "next/image"

const data = [
    One,
    Two,
    Three,
    One,
    Two,
    Three
]

export default function Slider() {
    return (
        <AutoPlaySlider arrows={false}>
            {
                data.map((e, i) => (
                    <div key={i} className={style.slides}>
                        <div className={style.img}>
                            <Image src={e} alt="domain" />
                        </div>
                    </div>
                ))
            }
        </AutoPlaySlider>
    )
}