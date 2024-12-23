// Css
import styles from "./cards.module.css"

export default function Cards() {
    return (
        <div className={styles.root}>
            {
                [
                    ["1B+", "Engaged Customers"],
                    ["7x", "Avg ROAS increase"],
                    ["35", "Awards"],
                    ["42%", "Avg CAC reduction"],
                ].map(([title, desc], i) => (
                    <div key={i} className={styles.cards}>
                        <h3 className={styles.title}
                            dangerouslySetInnerHTML={{ __html: title }}
                        />
                        <p className={styles.para}>
                            {desc}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}