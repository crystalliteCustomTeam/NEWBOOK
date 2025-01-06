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
                        <h2 className={styles.title}>From Pages to the Big Stage: Light Up Times Square with Your Book Launch!</h2>
                        <p className={styles.para}>Billboard advertising in Times Square gives authors unique visibility in a globally iconic location, reaching a vast, diverse audience. This exposure boosts brand credibility, attracts potential readers, sparks social media buzz, and can lead to increased sales and media opportunities.</p>
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