// Components
import { CTAGroupLight } from "@/components";
import Cards from "./cards/cards";
// Css
import styles from "./process.module.css"
export default function Process() {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div className={styles.__grid}>
                        <div className={styles.content}>
                            <h2 className={styles.title}>Those results? We don’t pull them out of thin air. They come from a clear-cut, data-driven process.</h2>
                            <p className={styles.para}>Unfortunately, there’s no such thing as SEO magic. But our four-step process comes pretty darn close.</p>
                            <div className={styles.cta}>
                                <CTAGroupLight/>
                            </div>
                        </div>
                        <Cards/>
                    </div>
                </div>
            </div>
        </section>
    )
}