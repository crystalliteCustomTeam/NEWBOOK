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
                        <h2 className={style.title}>Crush the Competition with Amazon Marketing!</h2>
                        <div>
                            <p className={style.para}>If your products aren't ranking (or even showing up), you're missing out.</p>
                            <p className={style.para}>Revenue growth is our sole focus when strategizing your Amazon campaigns. We have the secret formulas for balancing Amazon PPC and Amazon SEO to drive optimal campaign performance and increased profits.</p>
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