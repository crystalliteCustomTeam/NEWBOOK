// Components
import { CTAGroupLight } from "@/components"
import Cards from "./cards/cards"
// Css
import style from "./podcasting-excellence.module.css"

export default function ImportanceOf() {
    return (
        <section>
            <div className={style.root}>
                <div className="container">
                    <div className={style._grid}>
                        <div>
                            <h2 className={style.title}>Behind Every Mic: The Art of Podcasting Excellence!</h2>
                            <p className={style.para}>From ideation to production, we guide you through each step with expert insights and creative strategies, ensuring your podcast not only stands out but also resonates deeply with your audience.</p>
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