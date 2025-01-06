// Components
import { CTAGroupLight } from "@/components";
import Cards from "./cards/cards";
// Css
import styles from "./solutions.module.css"
export default function Solutions() {
    return (
        <div className={styles.root}>
            <div className="container">
                <div className={styles.__grid}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Combine keyword research with our other services!</h2>
                        <p className={styles.para}>SEO keyword research is vital, but it should be part of a broader strategy. Keyword analysis impacts many areas of SEO, so explore our other SEO services to enhance your digital marketing efforts:</p>
                        <div className={styles.cta}>
                            <CTAGroupLight />
                        </div>
                    </div>
                    <Cards />
                </div>
            </div>
        </div>
    )
}