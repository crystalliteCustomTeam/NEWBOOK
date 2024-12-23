// Next
import dynamic from "next/dynamic"
// Components
const Cards = dynamic(() => import('./cards/cards'))
// Css
import styles from "./reviews.module.css"

export default function OurCustomers({ bg = "bg-[#F2F5F7]" }) {
    return (
        <section>
            <div className={`${styles.root} ${bg}`}>
                <div className="container">
                    <div className={styles.content}>
                        <h2 className={styles.title}>Here’s what Book Marketing Customers Have to Say!</h2>
                        <p className={styles.para}>Our clientele speaks for itself. With a 100% retention rate and a loyal base of recurring clients, our track record reflects the trust and satisfaction we’ve earned by consistently delivering exceptional results.</p>
                    </div>
                    <Cards />
                    <div className={styles.rating}>
                        <p className={styles.para2}>Clutch Average Review Rating: <span className={styles.paraDark}>4.9 out of 5</span> <span className={styles.stars}>★★★★★</span> based on <span className={styles.paraDark}>20 reviews</span></p>
                    </div>
                </div>
            </div>
        </section>
    )
};