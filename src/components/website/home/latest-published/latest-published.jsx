// Next
import Image from "next/image"
// Media
import Book from "media/home/hardcover_book.png"
// Components
import { Counter, CTAGroupLight } from "@/components"
// Css
import style from "./latest-published.module.css"

const data = [
    [5, "Books Published"],
    [4.5, "User Reviews"],
    [4, "Best Seller Awards"],
]

export default function LatestPublished() {
    return (
        <section>
            <div className={style.root}>
                <Image src={Book} alt="domain" className={style.img} />
                <div className="container">
                    <div className={style.grids}>
                        <div className={style.cols}>
                            <h2 className={style.title}>Book Marketing’s Newest Release</h2>
                            <p className={style.para}>Discover our newest additions featured on Amazon’s top-selling and hottest release with rising fame among international readers—your next top pick is just a click away.</p>
                            <div className={style.counters}>
                                {
                                    data.map(([value, text]) => (
                                        <div key={value} className={style.counterCard}>
                                            <Counter value={value} className={style.numbers} />
                                            <span className={style.about}>{text}</span>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className={style.cta}>
                                <CTAGroupLight />
                            </div>
                        </div>
                        <Image src={Book} alt="domain" className={style.img2} />
                    </div>
                </div>
            </div>
        </section>
    )
}