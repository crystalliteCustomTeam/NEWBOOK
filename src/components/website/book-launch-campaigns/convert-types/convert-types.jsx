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
                        <h2 className={style.title}>Book Launch Campaigns Services!</h2>
                            <p className={style.para}>Navigating the online world can be difficult, but your Online Reputation doesn’t have to be. As one of the leading Online Reputation Companies, Book Marketing begins by carefully examining online content and images, social media interactions, and search engine results. This step is vital to understanding your current online reputation score, whether you're an individual or a business. We analyze this information to create a clear picture of your current Online Reputation.</p>
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