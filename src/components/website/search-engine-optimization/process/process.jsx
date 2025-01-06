// Components
import { CTAGroupLight } from "@/components"
import Cards from "./cards/cards"
// Css
import styles from "./process.module.css"
export default function Process() {
  return (
    <section>
      <div className={styles.root}>
        <div className="container">
          <div className={styles.__grid}>
            <div className={styles.content}>
              <h2 className={styles.title}>Why SEO Matters</h2>
              <p className={styles.para}>
                Is your website lost in search results? SEO boosts your
                rankings, ensuring maximum engagement by getting you to the top.
                Our SEO services provide results:
              </p>
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
