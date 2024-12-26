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
                        <h2 className={style.title}>Our Social Media Services</h2>
                        <p className={style.para}>Book Marketing’s comprehensive suite of social media services is designed to make your online presence stand out:</p>
                    </div>
                    <Cards />
                </div>
            </div>
        </section>
    )
}