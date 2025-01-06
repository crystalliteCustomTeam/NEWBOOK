// Next
import Image from "next/image";
// Components
import { CTAGroupLight } from "@/components";
// Css
import styles from "./ad-strategies.module.css"
// Media
import Ads from "media/paid-ad-campaigns/ads.png"
export default function AdStrategies() {
    return (
        <section>
            <div className={styles.root}>
                <Image src={Ads} alt="domain" className={styles.img} />
                <div className="container">
                    <div className={styles.__grid}>
                        <div className={styles.column}>
                            <h2 className={styles.title}>Get started with Paid Advertising Campaign Services for Book Marketing</h2>
                            <p className={styles.para}>Get in touch with us to find out how Book Marketing’s Paid Ad Campaign services will help you in achieving your objectives.</p>
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