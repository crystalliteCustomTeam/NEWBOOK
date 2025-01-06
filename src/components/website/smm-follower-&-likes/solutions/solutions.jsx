// Components
import { CTAGroupLight } from "@/components";
import Cards from "./cards/cards";
// Css
import styles from "./solutions.module.css"
export default function Solutions() {
  return (
    <div className={styles.root}>
                <div className="container">
                    <div className={styles.__grid}>
                        <div className={styles.content}>
                            <h2 className={styles.title}>How Important is Social Media Marketing?</h2>
                            <p className={styles.para}>If you want to ensure your potential audience finds your content and stays focused on it, then Social Media Marketing will get this job done for you. It ensures traffic on your feed. </p>
                            <div className={styles.cta}>
                                <CTAGroupLight />
                            </div>
                        </div>
                        <Cards/>
                    </div>
                </div>
            </div>
  )
}