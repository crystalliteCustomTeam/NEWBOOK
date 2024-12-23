// Next
import dynamic from "next/dynamic"
// Components
const Cards = dynamic(() => import('./cards/cards'))
import { CTAGroupLight } from "@/components"
// Css
import styles from "./why-choose.module.css"

export default function WhyChoose({
    title = "What Makes Book Marketing the Best Ghostwriting Company?",
    desc = "While our reasons are plenty, and our portfolio speaks for itself, we have summarized some of the highlights for you:",
    data = [
        {
            title: "Customizable Bundles",
            desc: "Unlike our competitors, we offer the best price in the industry, along with customizable service bundles to fit your budget and book marketing needs for maximum impact."
        },
        {
            title: "24/7 Consultation and Support",
            desc: "Worried about being ghosted by your service providers? At Book Marketing, our consultants are available around the clock to offer timely support and expert advice for your book."
        },
        {
            title: "One-stop Hub",
            desc: "With years of industry experience, Book Marketing is equipped to manage every aspect of your book’s journey. Our professional team delivers seamless and comprehensive execution from start to finish."
        },
        {
            title: "Satisfaction-guaranteed",
            desc: "Our customers keep coming back to us because we deliver satisfaction-guaranteed results, ensuring every project exceeds expectations and leaves a lasting impression."
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
