// Next
import Image from "next/image"
// Css
import style from "./hero.module.css"
// Media
import Bg from "media/smm-follower-&-likes/hero-bg.png"
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
                            Social Media Marketing: Get Enhanced Following and Likes 
                            </h1>
                            <p className={style.para}>
                            Book Marketing enables users to enhance their social media following and likes via unmatched SMM services across several platforms. 
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