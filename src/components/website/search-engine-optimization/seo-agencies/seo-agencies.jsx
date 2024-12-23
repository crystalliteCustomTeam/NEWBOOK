// Next
import Image from "next/image";
// Media
import SEO_Analytics from "media/search-engine-optimization/analytics.png"
// Css
import styles from "./seo-agencies.module.css"
export default function SeoAgencies() {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div>
                        <h2 className={styles.title}>Other SEO agencies promise results.
                            We’ve got dozens of case studies to prove it</h2>
                    </div>
                    <Image src={SEO_Analytics} alt="domain" className={styles.img} />
                </div>
            </div>
        </section>
    )
}