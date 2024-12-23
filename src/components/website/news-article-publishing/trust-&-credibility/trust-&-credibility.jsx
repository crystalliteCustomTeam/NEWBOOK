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
                        <h2 className={styles.title}>Guaranteed publicity on 200 News Sites Build Trust & Credibility With Ease!</h2>
                        <p className={styles.para}>Publish your story on influential news sites that your competitors can't reach. With millions of readers every month, you'll get a massive boost in exposure, interest, and credibility.</p>
                    </div>
                    <Image src={Mockups} alt="domain" className={styles.img} />
                </div>
            </div>
        </section>
    )
}