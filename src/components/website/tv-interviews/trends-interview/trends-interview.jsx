// Css
import Cards from "./cards/cards"
import styles from "./trends-interview.module.css"
export default function TrendsInterview() {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div className={styles.content}>
                        <h2 className={styles.title}>Discover the Latest Trends Interviewing for TV</h2>
                    </div>
                    <Cards/>
                </div>
            </div>
        </section>
    )
}