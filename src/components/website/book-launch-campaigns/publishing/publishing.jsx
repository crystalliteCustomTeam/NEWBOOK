// Css
import style from "./publishing.module.css"
// Next
import Image from "next/image"
// Media
import Checkbox from "media/home/checkbox-pink.svg"
import Book from "media/book-launch-campaigns/book.png"
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
                            <h2 className={style.title}>Let Our Team Elevate Your Book Launch!</h2>
                            <p className={style.para}>You’re one step closer to showcasing your writing excellence. Our professionals are here to guide you through editing, proofreading, and publishing. We understand the effort involved—let us help! Reach out today to collaborate!</p>
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