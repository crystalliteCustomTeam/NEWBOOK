// Next
import Image from "next/image";
// Components
import { CTAGroupLight } from "@/components";
// Css
import styles from "./numbers-speak.module.css"
// Media
import Graph from "media/paid-ad-campaigns/graph.png"
export default function NumbersSpeak() {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div className={styles.content}>
                        <h2 className={styles.title}>We Don’t Talk – We Let the Numbers Speak!</h2>
                        <p className={styles.para}>Our team at Book Marketing believes in hard numbers and solid results when it comes to effective paid and organic marketing. This is one of the main reasons we offer a complete refund – if our 3-month performance does not provide month-on-month ROI! Clients can also opt to get free services till they receive positive ROI – that’s how confident we are on our services!</p>
                        <div className={styles.cta}>
                            <CTAGroupLight />
                        </div>
                    </div>
                    <Image src={Graph} alt="domain" />
                </div>
            </div>
        </section>
    )
}