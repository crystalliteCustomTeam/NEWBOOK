// Next
import Image from "next/image"
// Css
import style from "./hero.module.css"
// Media
import Bg from "media/influencer-marketing/hero-bg.png"
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
                            Execute Hyper-Targeted Campaigns With Influencer Marketing!
                            </h1>
                            <p className={style.para}>
                            Want to increase your conversions and brand presence through influencer marketing?
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