// Next
import Image from "next/image";
// Components
import { CTAGroupLight } from "@/components";
// Css
import styles from "./revenue-growth.module.css"
// Media
import Campaigns from "media/paid-ad-campaigns/campaigns.png"
export default function RevenueGrowth() {
    return (
        <section>
            <div className={styles.root}>
                <Image src={Campaigns} alt="domain" className={styles.img} />
                <div className="container">
                    <div className={styles.__grid}>
                        <div className={styles.column}>
                            <h2 className={styles.title}>Why choose Book Marketing for Paid Advertising Campaign Services?</h2>
                            <p className={styles.para}>Our services boost brand recognition, attract new customers, and drive sales with impactful ads. We optimize strategies for higher ROI and measure campaign success to ensure ongoing improvement.</p>
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