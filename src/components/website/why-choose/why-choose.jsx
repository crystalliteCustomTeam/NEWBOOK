// Next
import dynamic from "next/dynamic"
// Components
const Cards = dynamic(() => import('./cards/cards'))
import { CTAGroupLight } from "@/components"
// Css
import styles from "./why-choose.module.css"

export default function WhyChoose({
    title = "Why Choose Book Marketing?",
    desc = "At Book Marketing, we combine creativity with strategy to deliver impactful solutions for promoting your book.",
    data = [
        {
            title: "Diverse Marketing Strategies",
            desc: "Our book marketing services reach diverse audiences through social media campaigns, email marketing, and influencer partnerships to ensure your book gets noticed."
        },
        {
            title: "Supportive Community",
            desc: "We help you build a loyal community of readers by fostering engagement and encouraging discussions, turning them into passionate advocates for your book."
        },
        {
            title: "Cutting-Edge Digital Tools",
            desc: "Stay ahead with cutting-edge digital marketing tools, using targeted ads and analytics to ensure your book gets the attention it deserves."
        },
        {
            title: "Exclusive Author Merchandise",
            desc: "Engage your audience with branded merchandise that reflects your book's theme. From bookmarks to custom prints, we create memorable items that fans can cherish and share."
        }
    ]
}) {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div className={styles.grids}>
                        <div>
                            <h2 className={styles.title}>{title}</h2>
                            <p className={styles.para}>{desc}</p>
                            <div className={styles.cta}>
                                <CTAGroupLight />
                            </div>
                        </div>
                        <Cards data={data} />
                    </div>
                </div>
            </div>
        </section>
    )
}
