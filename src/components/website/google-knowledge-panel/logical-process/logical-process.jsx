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
                            <h2 className={styles.title}>Our keyword research services are structured with a logical process.</h2>
                            <p className={styles.para}>Once the keyword research process is done, Book Marketing will work with you to create an overall keyword strategy. This includes things like your KPIs, budget, long-tail and short-term keywords, and how they will be used in your content. We always make sure this aligns with your overall business plan and goals.</p>
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