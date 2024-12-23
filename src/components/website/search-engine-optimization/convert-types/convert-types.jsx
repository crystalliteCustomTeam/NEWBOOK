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
                        <h2 className={style.title}>We care more about your long-term success than quick keyword jumps</h2>
                        <p className={style.para}>Whether you have a brand new website and want to take it from zero to thousands of visitors per month… or you’ve been around for decades but suddenly lost a big chunk of your traffic… our SEO company will help you bring in quality traffic. With a long-term SEO strategy that’s tailored to your business.</p>
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