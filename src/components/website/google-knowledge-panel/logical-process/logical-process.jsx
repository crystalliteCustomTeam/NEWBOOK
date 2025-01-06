// Next
import Image from "next/image";
// Media
import Research from "media/google-knowledge-panel/research-service.png"
// Components
import { CTAGroupLight } from "@/components";
// Css
import styles from "./logical-process.module.css"
export default function LogicalProcess() {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div className={styles.__grid}>
                        <div className={styles.leftColumn}>
                            <Image src={Research} alt="domain" />
                        </div>
                        <div className={styles.content}>
                            <h2 className={styles.title}>Ready to Boost Your Google Knowledge Presence? </h2>
                            <p className={styles.para}>Contact us to make your mark on Google and grow your authority across digital platforms!</p>
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