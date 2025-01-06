// Next
import Image from "next/image";
// Components
import { CTAGroupLight } from "@/components";
// Css
import styles from "./consumer-trust.module.css"
// Media
import Screens from "media/influencer-marketing/screens.png"
export default function ConsumerTrust() {
    return (
        <section>
        <div className={styles.root}>
            <Image src={Screens} alt="domain" className={styles.img} />
            <div className="container">
                <div className={styles.__grid}>
                    <div className="col-span-6"></div>
                    <div className={styles.column}>
                        <h2 className={styles.title}>Influence Your Brand’s Potential toward Success with Book Marketing’s Influencer Marketing Tricks</h2>
                        <p className={styles.para}>Want that match-made-in-heaven trade for your brand? Contact us today to create a campaign that enhances your influence and impact.</p>
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