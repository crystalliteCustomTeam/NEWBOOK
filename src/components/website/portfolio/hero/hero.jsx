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
                        Book Marketing’s Services That Elevate Branding
                        </h1>
                        <p className={style.para}>
                        Our services are designed to not only rebrand your business but to transform the way it is perceived globally.
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