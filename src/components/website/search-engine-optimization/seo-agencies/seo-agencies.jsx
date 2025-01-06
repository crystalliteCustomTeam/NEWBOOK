// Next
import Image from "next/image"
// Media
import SEO_Analytics from "media/search-engine-optimization/analytics.png"
// Css
import styles from "./seo-agencies.module.css"
export default function SeoAgencies() {
  return (
    <section>
      <div className={styles.root}>
        <div className="container">
          <div>
            <h2 className={styles.title}>
              Result-Oriented SEO Services That Brings in Revenue and Customers
            </h2>
          </div>
          <Image src={SEO_Analytics} alt="domain" className={styles.img} />
        </div>
      </div>
    </section>
  )
}
