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
                        <h2 className={styles.title}>Listen to What Our Customers Say!</h2>
                        <p className={styles.para}>"I have always heard that getting a book published is no easy feat. That changed for me since I collaborated with teams at Book Marketing."</p>
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