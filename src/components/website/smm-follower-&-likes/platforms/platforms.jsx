// Next
import Image from "next/image"
// Components
import { CTAGroupLight } from "@/components"
// Css
import styles from "./platforms.module.css"
// Media
import Logos from "media/paid-ad-campaigns/logos.png"
export default function Platforms() {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div className={styles.content}>
                        <h2 className={styles.title}>Platforms We Love To Work With!</h2>
                    </div>
                    <div className={styles.__grid}>
                        <div className={styles.hidcolumn}></div>
                        <div className={styles.mainColumn}>
                            <Image src={Logos} alt="domain" />
                        </div>
                        <div className={styles.hidcolumn}></div>
                    </div>
                    <div className={styles.cta}>
                        <CTAGroupLight />
                    </div>
                </div>
            </div>
        </section>
    )
}