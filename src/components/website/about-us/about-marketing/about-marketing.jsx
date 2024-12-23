// Css
import styles from "./about-marketing.module.css"
// Components
import { CTAGroupLight } from "@/components"
import Cards from "./cards/cards"

const data = ["Tech Integrated Solutions", "Client Focused Approach", "Disruptive Innovation", "Digital Transformation Partner"]

export default function AboutMarketing() {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div className={styles.grids}>
                        <div>
                            <h2 className={styles.title}>About Book Marketing!</h2>
                            <p className={styles.para}>Book Marketing is helping startups and organizations build and implement digital transformation solutions tailored to their demand and needs.</p>
                            <ul className={styles.lists}>
                                {
                                    data.map((e, i) => (
                                        <li key={e} className={styles.items}>
                                            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="0.48999" width="28" height="28" rx="5" fill="#F32FA4" />
                                                <path d="M12.2497 16.9225L10.2255 14.8983C9.99805 14.6708 9.63055 14.6708 9.40305 14.8983C9.17555 15.1258 9.17555 15.4933 9.40305 15.7208L11.8414 18.1592C12.0689 18.3867 12.4364 18.3867 12.6639 18.1592L18.8355 11.9875C19.063 11.76 19.063 11.3925 18.8355 11.165C18.608 10.9375 18.2405 10.9375 18.013 11.165L12.2497 16.9225Z" fill="white" />
                                            </svg>
                                            <span>{e}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className={styles.cta}>
                                <CTAGroupLight />
                            </div>
                        </div>
                        <Cards />
                    </div>
                </div>
            </div>
        </section>
    )
}