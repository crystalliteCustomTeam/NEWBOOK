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
                        <p className={styles.para}>While utilizing an SEO keyword research service is important, it shouldn’t be used as a standalone service but instead as part of your overarching SEO strategy. Indeed, keyword analysis permeates many areas of SEO, so it’s worthwhile looking at the other SEO services we offer and how they can complement your digital marketing:</p>
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