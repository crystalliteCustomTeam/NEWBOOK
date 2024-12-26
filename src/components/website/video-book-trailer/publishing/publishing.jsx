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
                            <h2 className={style.title}>Promote Your Book Trailer on Your Social Media</h2>
                            <p className={style.para}>Share it on social media, include it on your website, and submit it to book-related platforms to maximize exposure.</p>
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