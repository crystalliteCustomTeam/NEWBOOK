// Components
import { CTAGroupLight } from "@/components"
import Cards from "./cards/cards"
// Css
import style from "./importance-of.module.css"

export default function ImportanceOf() {
    return (
        <section>
            <div className={style.root}>
                <div className="container">
                    <div className={style._grid}>
                        <div>
                            <h2 className={style.title}>The Importance of Social Media Marketing!</h2>
                            <p className={style.para}>More than half of consumers* turn to social media to learn about new brands, making social media management an essential component of At Book Marketing, we view social media management as the backbone of our approach, with data that supports our strategy.</p>
                            <div className={style.cta}>
                                <CTAGroupLight />
                            </div>
                        </div>
                        <div>
                            <Cards />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}