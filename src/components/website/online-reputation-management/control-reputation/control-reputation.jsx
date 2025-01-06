// Next
import Image from "next/image";
// Components
import { CTAGroupLight } from "@/components";
// Media
import NegativeResults from "media/online-reputation-management/suppress-negative-results.png"
// Css
import styles from "./control-reputation.module.css"

export default function ControlReputation() {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div className={styles.__grid}>
                        <Image src={NegativeResults} alt="domain" />
                        <div className={styles.content}>
                            <h2 className={styles.title}>We help you take control of your online reputation with advanced online reputation management services.</h2>
                            <p className={styles.para}>Our specialized Online Reputation Management (ORM) services for businesses and authors work tirelessly to build and maintain a positive digital reputation for your brand, even while you sleep.</p>
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