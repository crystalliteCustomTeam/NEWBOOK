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
                            <p className={styles.para}>We have exclusive partnerships with high-authority sites that can build a positive reputation for your business — in real life and on Google. By creating fresh online content, we’re able to replace negative search results to repair your reputation.</p>
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