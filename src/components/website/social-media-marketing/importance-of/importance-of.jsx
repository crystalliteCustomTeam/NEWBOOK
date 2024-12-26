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
                            <h2 className={style.title}>Having a social media account and managing it are two different aspects. </h2>
                            <p className={style.para}>Our Social Media Managers ensure your content stays relevant, ranks high in searches, and aligns with current algorithms. </p>
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