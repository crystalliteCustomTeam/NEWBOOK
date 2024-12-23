// Css
import style from "./publishing.module.css"
// Next
import Image from "next/image"
// Media
import Book from "media/video-book-trailer/book.png"
// Components
import { CTAGroupLight } from "@/components"

export default function Publishing() {
    return (
        <section>
            <div className={style.root}>
                <Image src={Book} alt="domain" className={style.img} />
                <div className="container">
                    <div className={style.grids}>
                        <div className={style.cols}>
                            <h2 className={style.title}>We help you take control of your online reputation with advanced online reputation management services.</h2>
                            <p className={style.para}>We have exclusive partnerships with high-authority sites that can build a positive reputation for your business — in real life and on Google. By creating fresh online content, we’re able to replace negative search results to repair your reputation.</p>
                            <div className={style.cta}>
                                <CTAGroupLight />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}