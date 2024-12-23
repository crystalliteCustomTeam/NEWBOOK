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
                        Other Services!
                    </h2>
                    <p className={style.para}>
                        Promote your book through a team of dedicated experts who understand  your physical, emotional, and monetary investment into the project and  are ready, willing, and able to take your book marketing worldwide.
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