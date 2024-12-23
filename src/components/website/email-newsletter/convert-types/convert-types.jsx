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
                        <h2 className={style.title}>Easily Build an HTML Email Template with Book Marketing</h2>
                        <p className={style.para}>Book Marketing email builder gives you all the tools to expertly start building and customizing your HTML email template. Get it done from zero to the finished product in just a few minutes!</p>
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