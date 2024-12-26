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
                    <h2 className={style.title}>Kickstart Your Success with Book Marketing’s Active Social Media Services!</h2>
                </div>
            </div>
            <div className={style.root2}>
                <div className={style.beforeLeft}></div>
                <div className={`container ${style.cardWrapper}`}>
                    <div className={style.card}>
                        <Image src={Gallery} alt="domain" />
                        <h3 className={style.cardTitle}>Our Social Media Marketing</h3>
                        <p className={style.cardPara}>Get in touch to discover how we can elevate your social media presence and help you stand out in a crowded marketplace.</p>
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
