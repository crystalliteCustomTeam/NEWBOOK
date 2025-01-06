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
                        <Image src={Statistics} alt="domain" className={styles.img} />
                        <div>
                            <h2 className={styles.title}>Explore our comprehensive article-writing solutions and grow your online presence.</h2>
                            <p className={styles.para}>Looking for verified email campaign services? With a 98% positive success rate, Book Marketing is your ideal choice. Contact us today for top-rated article-writing services that make your content attention-grabbing and unforgettable!</p>
                            <div className={styles.cta}>
                                <CTAGroupLight />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}