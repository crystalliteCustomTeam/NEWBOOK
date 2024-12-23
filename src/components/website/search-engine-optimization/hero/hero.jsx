// Next
import Image from "next/image"
// Css
import style from "./hero.module.css"
// Media
import Bg from "media/search-engine-optimization/hero-bg.png"
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
                            Finally, An SEO Company That Delivers Results!
                            </h1>
                            <p className={style.para}>
                            If you are looking for top SEO content marketing, you are at the right place. Employ our systematic and results-driven SEO content marketing services to witness remarkable online growth.
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