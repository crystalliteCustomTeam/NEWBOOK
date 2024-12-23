// Next
import Image from "next/image"
// Css
import style from "./hero.module.css"
// Media
import Bg from "media/portfolio/hero-bg.png"
// Components
import { CTAGroupDark } from "@/components"

export default function Hero() {
    return (
        <section>
            <div className={style.root}>
                <Image src={Bg} alt="domain" fill priority className={style.bg} />
                <div className="container">
                    <div>
                        <h1 className={style.title}>
                            We Take Digital Experiences To The Next Level
                        </h1>
                        <p className={style.para}>
                            The products we build are changing the way industry leaders do their core business.
                        </p>
                        <div className={style.cta}>
                            <CTAGroupDark />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}