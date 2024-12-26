// Css
import style from "./services.module.css"
// Next
import dynamic from "next/dynamic"
// Components
const Slider = dynamic(() => import("./slider/slider"))
import { CTAGroupLight } from "@/components"

export default function Services() {
    return (
        <section>
            <div className={style.root}>
                <div className={style.content}>
                    <h2 className={style.title}>
                    Book Marketing’s Services at a Glance
                    </h2>
                    <p className={style.para}>
                    Writing a book is just the beginning. At Book Marketing, we help you choose the right strategies to maximize its potential within your budget:
                    </p>
                    <div className={style.cta}>
                        <CTAGroupLight />
                    </div>
                </div>
                <Slider />
            </div>
        </section>
    )
}