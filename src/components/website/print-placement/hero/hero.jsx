// Next
import Image from "next/image"
// Css
import style from "./hero.module.css"
// Media
import Bg from "media/print-placement/hero-bg.png"
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
                            Print Placement Services for New Businesses and Authors
                            </h1>
                            <p className={style.para}>
                            At Book Marketing, we maximize your brand and book's visibility with premium Print Placement Services, ensuring your presence in relevant printed media for maximum exposure.
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