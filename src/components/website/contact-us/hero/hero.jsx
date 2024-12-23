// Next
import Image from "next/image"
// Css
import style from "./hero.module.css"
// Media
import Bg from "media/contact-us/hero-bg.png"

export default function Hero() {
    return (
        <>
            <section>
                <div className={style.root}>
                    <Image src={Bg} alt="domain" fill priority className={style.bg} />
                    <div className="container">
                        <div className={style.grids}>
                            <div className={style.content}>
                            <h1 className={style.title}>
                            Ready to Address Your Business Challenges?
                            </h1>
                            <p className={style.para}>
                            As your dedicated technology partner, we're here to help you achieve your goals. Share your contact information, and let's initiate a strategic collaboration aimed at success.
                            </p>
                            <a className={style.cta} href="tel:83300012222">(833) 0001 - 2222</a>
                            <a className={style.cta} href="mailto:info@bookmarketing.com">info@bookmarketing.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}