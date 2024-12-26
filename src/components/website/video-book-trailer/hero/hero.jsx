// Next
import Image from "next/image"
// Css
import style from "./hero.module.css"
// Media
import Bg from "media/video-book-trailer/hero-bg.png"
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
                            Build Excitement for Your Book with Our Trailer Services!
                            </h1>
                            <p className={style.para}>
                            Create buzz for your book with a Video Book Trailer that captures its essence and hooks your audience on the go.
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