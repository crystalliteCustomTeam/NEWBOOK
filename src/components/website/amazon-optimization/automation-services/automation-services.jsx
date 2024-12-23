// Next
import Image from "next/image"
// Components
import { CTAGroupLight } from "@/components"
// Css
import styles from "./automation-services.module.css"
// Media
import Units from "media/amazon-optimization/units.png"

export default function AutomationServices() {
    return (
        <section>
            <div className={styles.root}>
                <Image src={Units} alt="domain" className={styles.img} />
                <div className="container">
                    <div className={styles.__grid}>
                        <div className={styles.column}>
                            <h2 className={styles.title}>We manage and grow your Amazon automation business entirely and collect profits!</h2>
                            <p className={styles.para}>Looking for an automated FBA store partner that provides profitable wholesale items & top-tier customer service?</p>
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