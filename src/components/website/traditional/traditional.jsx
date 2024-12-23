// Components
import { CTAGroupLight } from "@/components"
import Cards from "./cards/cards"
// Css
import styles from "./traditional.module.css"

export default function Traditional() {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div className={styles.grids}>
                        <div className={styles.content}>
                            <h2 className={styles.title}>There’s traditional social marketing. Then there’s Book Marketing!</h2>
                            <p className={styles.para}>Moving towards a social-first approach doesn’t have to be hard. Book Marketing provides a perfect pairing of brands and talent to deliver social media campaigns that convert. Our always-on services encompass community management to social-experiential ensuring your brand stays top of mind.</p>
                            <div className={styles.cta}>
                                <CTAGroupLight />
                            </div>
                        </div>
                        <Cards/>
                    </div>
                </div>
            </div>
        </section>
    )
}