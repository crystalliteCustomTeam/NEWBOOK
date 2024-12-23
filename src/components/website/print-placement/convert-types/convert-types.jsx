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
                        <h2 className={style.title}>6 Impressive Design Tools for Magazines in Book Marketing</h2>
                            <p className={style.para}>Book Marketing continues to evolve, the trusted choice for magazine design for over 40 years. Design exceptional magazines layouts for print and digital with unmatched ease and power.</p>
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