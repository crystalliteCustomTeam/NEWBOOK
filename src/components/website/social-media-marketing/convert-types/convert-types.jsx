// Css
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
                        <h2 className={style.title}>Stand Out With Social Media Content That Converts</h2>
                        <p className={style.para}>We understand that creating social content just because it’s trendy isn’t enough. Instead, we strive to remove ad waste and spend time and money on what works, helping your business achieve lasting social media marketing success and brand awareness across social media platforms.</p>
                    </div>
                    <Cards />
                </div>
            </div>
        </section>
    )
}