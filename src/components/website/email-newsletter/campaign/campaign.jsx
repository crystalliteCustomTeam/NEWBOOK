// Next
import Image from "next/image"
// Css
import styles from "./campaign.module.css"
// Media
import Statistics from "media/email-newsletter/statistics.png"
// Components
import { CTAGroupLight } from "@/components"

export default function Campaign() {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div className={styles.__grid}>
                        <div>
                            <h2 className={styles.title}>Maximize Your Reach with Data-Driven Decisions</h2>
                            <p className={styles.para}>Understand what works for your audience with our comprehensive metrics. Make informed adjustments to ensure each email resonates and meets your marketing goals. Transform data into action!</p>
                            <div className={styles.cta}>
                                <CTAGroupLight />
                            </div>
                        </div>
                        <Image src={Statistics} alt="domain" className={styles.img} />
                    </div>
                </div>
            </div>
        </section>
    )
}