// Css
import styles from "./feedback.module.css"
// Components
import Cards from "./cards/cards"

export default function Feedback() {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div className={styles.content}>
                        <span className={styles.desc}>They already love our services 😍</span>
                        <h2 className={styles.title}>See what our users say about us</h2>
                    </div>
                </div>
                    <Cards/>
            </div>
        </section>
    )
}