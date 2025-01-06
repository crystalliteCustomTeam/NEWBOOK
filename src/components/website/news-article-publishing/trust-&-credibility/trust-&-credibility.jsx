// Next
import Image from "next/image";
// Media
import Mockups from "media/news-article-publishing/mockups.png"
// Css
import styles from "./trust-&-credibility.module.css"

export default function TrustAndCredibility() {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div className={styles.content}>
                        <h2 className={styles.title}>At Book Marketing, we deliver impactful, SEO-focused article writing tailored to your business needs.</h2>
                        <p className={styles.para}>Our team of experts comprises of Best Published Article Writers, providing plagiarism-free content that is guaranteed to reach your audience through all algorithms.</p>
                    </div>
                    <Image src={Mockups} alt="domain" className={styles.img} />
                </div>
            </div>
        </section>
    )
}