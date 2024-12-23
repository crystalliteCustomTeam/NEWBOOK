// Css
import styles from "./believe-in.module.css"
// Components
import { CTAGroupLight } from "@/components"
import Cards from "./cards/cards"

export default function BelieveIn() {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div className={styles.content}>
                        <h2 className={styles.title}>What We Believe In.</h2>
                    </div>
                    <Cards />
                    <div className={styles.cta}>
                        <CTAGroupLight />
                    </div>
                </div>
            </div>
        </section>
    )
};