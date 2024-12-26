// Next
import Image from "next/image"
// Css
import style from "./hero.module.css"
// Media
import Bg from "media/tv-interviews/hero-bg.png"
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
                            From Pages to Screens: Book Marketing’s TV Interviews Bring You to Your Reader’s Screens
                            </h1>
                            <p className={style.para}>
                            TV interviews are powerful for brand promotion. With Book Marketing’s TV Interview Service, we help your book gain recognition and connect with a wider audience. 
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