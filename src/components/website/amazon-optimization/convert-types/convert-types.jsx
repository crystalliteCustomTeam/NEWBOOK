// Css
import style from "./convert-types.module.css"
// Next
import dynamic from "next/dynamic"
// Components
import { CTAGroupLight } from "@/components"
const Cards = dynamic(() => import("./cards/cards"))

export default function ConvertTypes() {
    return (
        <section>
            <div className={style.root}>
                <div className="container">
                    <div className={style.content}>
                        <h2 className={style.title}>Let Amazon Marketing Skyrocket Your Sales</h2>
                        <div>
                            <p className={style.para}>With eCommerce websites leading traditional markets, especially for international buyers, it’s time to leverage Amazon Marketing. Book Marketing provides simple services, letting you choose the one that best suits your needs and see instant results</p>
                        </div>
                    </div>
                    <Cards />
                    <div className={style.cta}>
                        <CTAGroupLight />
                    </div>
                </div>
            </div>
        </section>
    )
}