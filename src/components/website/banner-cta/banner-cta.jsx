// Css
import styles from "./banner-cta.module.css"
// Components
import { CTA } from "@/components"

export default function BannerCta({ title, desc }) {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div className={styles.card}>
                        <div className={styles.grids}>
                            <div className={styles.leftColumn}>
                                <h2 className={styles.title}>{title}</h2>
                                <p className={styles.para}>{desc}</p>
                            </div>
                            <div className={styles.rightColumn}>
                                <CTA icon="chat-pink" text="Book a free consultation" css={styles.cta} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}