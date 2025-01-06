// Next
import Image from "next/image"
// Css
import style from "./hero.module.css"
// Media
import Bg from "media/paid-ad-campaigns/hero-bg.png"
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
                            Paid Ad Campaign Services for New Businesses and Authors
                            </h1>
                            <p className={style.para}>
                            Book Marketing offers Paid Ad Campaign services to help writers and new businesses reach a broader audience with effective strategies that deliver results.
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