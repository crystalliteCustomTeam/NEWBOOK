// Next
import Image from "next/image"
// Css
import style from "./hero.module.css"
// Media
import Bg from "media/book-launch-campaigns/hero-bg.png"
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
                            Book Launch Campaigns for Maximum Exposure!
                            </h1>
                            <p className={style.para}>
                            Our goal is to implement strategic marketing plans that establish your name and create a strong foundation for your writing career.
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