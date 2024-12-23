// Css
import { CTAGroupLight } from "@/components"
import style from "./convert-types.module.css"
// Next
import dynamic from "next/dynamic"
// Components
const Cards = dynamic(() => import("./cards/cards"))

export default function ConvertTypes() {
    return (
        <section>
            <div className={style.root}>
                <div className="container">
                    <div className={style.content}>
                        <h2 className={style.title}>Marketing that Gets Results!</h2>
                        <div className={style.desc}>
                        <p className={style.para}>From printed to digital newspapers. Book Marketing offers a extensive digital publishing platform for newspapers. Distribute your newspapers as PDF files locally or across all continents.</p>
                        <p className={style.para}>Choose our digital platform to provide your readers with an amazing online newspaper reader experience.  Besides that you can choose to sell or offer articles, directly from  the PDF, imported through ‘feeds’, or added in your own environment “the  creator”.</p>
                        </div>
                    </div>
                    <Cards />
                    <div className={style.cta}>
                        <CTAGroupLight/>
                    </div>
                </div>
            </div>
        </section>
    )
}