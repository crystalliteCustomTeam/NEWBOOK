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
                            <h2 className={styles.title}>Drive Revenue Growth with Strategic Paid Ad Campaigns!</h2>
                            <p className={styles.para}>Transform your clicks into revenue with PPC management services that integrate your sales data with your campaigns. Discover how businesses have achieved an average 25% increase in ROI using our PPC agency’s expertise and award-winning technology. Request your free strategy proposal!</p>
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