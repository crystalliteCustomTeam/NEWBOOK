// Next
import Image from "next/image"
// Css
import style from "./hero.module.css"
// Media
import Bg from "media/about-us/hero-bg.png"
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
                                Take Your Social Media Marketing to the Next Level
                            </h1>
                            <p className={style.para}>
                                Get fired up about your social media profiles with next-generation social media marketing from THE social media marketing agency.
                            </p>
                            <div className={style.cta}>
                                <CTAGroupDark />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}