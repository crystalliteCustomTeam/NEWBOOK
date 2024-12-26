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
                        <h2 className={styles.title}>The Power of Book Trailers</h2>
                        <p className={styles.para}>A moving picture narrates a thousand episodes. Our trailers strike a chord with your target audience, making them eager to explore your publication.</p>
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