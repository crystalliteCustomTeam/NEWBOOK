import Grids from "./grids/grids"
import styles from "./we-are-different.module.css"
export default function WeAreDifferent() {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div className={styles.content}>
                        <h2 className={styles.title}>Disappointed by Other SEO Operators? We Feel You!</h2>
                        <p className={styles.para}>We know how it feels to be let down by other SEO agencies. At Book Marketing, we have changed the dynamics of conventional SEO techniques. Here’s how we do it:</p>
                    </div>
                    <Grids/>
                </div>
            </div>
        </section>
    )
}