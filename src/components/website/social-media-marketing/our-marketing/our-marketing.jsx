// Css
import style from "./our-marketing.module.css"
// Next
import Image from "next/image"
import dynamic from "next/dynamic"
// Components
const Slider = dynamic(() => import("./slider/slider"))
// Media
import Gallery from "media/social-media-marketing/our-marketing/gallery.png"
// Components
import { CTAGroupLight } from "@/components"

export default function OurMarketing() {
    return (
        <section>
            <div className={style.root1}>
                <div className="container">
                    <h2 className={style.title}>Our in-house Team Of social media experts helping achieve your business goals!</h2>
                </div>
            </div>
            <div className={style.root2}>
                <div className={style.beforeLeft}></div>
                <div className={`container ${style.cardWrapper}`}>
                    <div className={style.card}>
                        <Image src={Gallery} alt="domain" />
                        <h3 className={style.cardTitle}>Our Social Media Marketing</h3>
                        <p className={style.cardPara}>Odio duis nullam turpis mattis tristique hac. Nec cursus non molestie velit. Nunc aliquet</p>
                        <div className={style.cta}>
                            <CTAGroupLight />
                        </div>
                    </div>
                </div>
                <Slider />
            </div>
        </section>
    )
}
