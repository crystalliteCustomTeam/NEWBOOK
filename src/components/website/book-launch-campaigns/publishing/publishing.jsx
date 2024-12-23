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
                            <h2 className={style.title}>What Sets Our Book Launch Campaigns!</h2>
                            <p className={style.para}>At Book Marketing, We offer superior-quality book editing services to elevate your book with help from former bestselling writers and publishing executives. Our goal at Ghostwriters Avenue is to simplify the editing process so you, the author, are not overwhelmed with the complexities of the editing world.</p>
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