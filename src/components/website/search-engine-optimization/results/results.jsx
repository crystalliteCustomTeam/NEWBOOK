// Component
import { CTAGroupLight } from "@/components"
// Next
import Image from "next/image"
// Media
import CaseStudy from "media/search-engine-optimization/case-study.png"
// Css
import styles from "./results.module.css"
export default function Results() {
  return (
    <section>
      <div className={styles.root}>
        <div className="container">
          <div className={styles.grids}>
            <div>
              <span className={styles.desc}>
                Partner with a SEO agency that’s laser focused on your ROI
              </span>
              <h2 className={styles.title}>
                Get Started with Book Marketing’s Leading SEO Services
              </h2>
              <div className={styles.para}>
                {[
                  "Investing in SEO is vital for growing your online presence. Book Marketing will help you reach the top of your industry. Contact us to learn about our services and how to increase your online presence today!",
                  // "(Because what’s the point of all that traffic if it doesn’t result in sales?!)",
                  // "Want to see if we can get those ROI-driven results for *your* business? That free consultation has got your name written all over it."
                ].map((e, i) => (
                  <p key={i}>{e}</p>
                ))}
              </div>
              <div className={styles.cta}>
                <CTAGroupLight />
              </div>
            </div>
            <div>
              <Image src={CaseStudy} alt="domain" className={styles.img} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
