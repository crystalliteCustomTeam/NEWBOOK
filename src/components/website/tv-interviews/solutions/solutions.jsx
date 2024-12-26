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
                            <h2 className={styles.title}>TV Interviews Never Go Out of Style to Create Awareness</h2>
                            <p className={styles.para}>Here are our reasons to believe why TV Interviews are the missing ingredient in your recipe to having the next bestseller book:</p>
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