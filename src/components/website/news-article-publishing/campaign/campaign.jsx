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
                            <h2 className={styles.title}>Detailed email campaign statistics!</h2>
                            <p className={styles.para}>Extensive, real-time statistics help you understand how recipients engaged with every single email in your campaign. You'll be able to tell who is opening your email and who is clicked through to your content. Allowing you monitor the performance of your campaigns and refine your email marketing strategy.</p>
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