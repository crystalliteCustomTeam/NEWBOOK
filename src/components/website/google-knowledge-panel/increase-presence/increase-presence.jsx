// Css
import Cards from "./cards/cards"
import styles from "./increase-presence.module.css"
export default function IncreasePresence() {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div className={styles.content}>
                        <h2 className={styles.title}>Our keyword research service helped 200 companies increase their online presence</h2>
                    </div>
                    <Cards/>
                </div>
            </div>
        </section>
    )
}