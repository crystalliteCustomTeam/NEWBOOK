// Next
import Image from "next/image";
// Components
import { CTAGroupLight } from "@/components";
// Css
import styles from "./one-roof.module.css"
// Media
import Units from "media/influencer-marketing/phone.png"
export default function OneRoof() {
    return (
        <section>
            <div className={styles.root}>
                <Image src={Units} alt="domain" className={styles.img} />
                <div className="container">
                    <div className={styles.__grid}>
                        <div className={styles.column}>
                            <h2 className={styles.title}>Bring your brand to its target audience with the command of influencers to connect with your audience.</h2>
                            <p className={styles.para}>At Book Marketing, we specialize in creating engaging, customized influencer marketing campaigns that align with your unique goals.</p>
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
