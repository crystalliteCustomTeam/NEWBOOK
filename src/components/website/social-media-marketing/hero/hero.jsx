// Next
import Image from "next/image"
// Css
import style from "./hero.module.css"
// Media
import Bg from "media/social-media-marketing/hero-bg.png"
import Stats from "media/social-media-marketing/hero-stats.png"
// Components
import { CTAGroupDark } from "@/components"

export default function Hero() {
    return (
        <>
            <section>
                <div className={style.root}>
                    <Image src={Bg} alt="domain" fill priority className={style.bg} />
                    <div className="container">
                        <div>
                            <h1 className={style.title}>
                            Social Media Marketing Services 
                            </h1>
                            <p className={style.para}>
                            In today’s digital world, a strong social media strategy is key to engaging your audience and boosting book revenue. At Book Marketing, we build your online presence through expert Social Media Management (SMM). 
                            </p>
                            <div className={style.cta}>
                                <CTAGroupDark />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Image src={Stats} alt="domain" priority className={style.stats} />
            </section>
        </>
    )
}