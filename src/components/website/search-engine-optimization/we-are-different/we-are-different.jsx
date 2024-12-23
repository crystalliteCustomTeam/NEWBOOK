import Grids from "./grids/grids"
import styles from "./we-are-different.module.css"
export default function WeAreDifferent() {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div className={styles.content}>
                        <h2 className={styles.title}>Been burned by other agencies before? Many of our clients have too.</h2>
                        <p className={styles.para}>But believe us when we say that our search engine optimization agency isn’t like other agencies. Really.</p>
                    </div>
                    <Grids/>
                </div>
            </div>
        </section>
    )
}