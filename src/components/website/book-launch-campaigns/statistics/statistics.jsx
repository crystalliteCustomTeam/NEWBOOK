// Next
import Image from "next/image"
// Media
import Img from "media/book-launch-campaigns/statistics.png"
// Components
import { CTAGroupLight } from "@/components"
// Css
import styles from "./statistics.module.css"
export default function Statistics() {
  return (
    <section>
      <div className={styles.root}>
        <div className="container">
          <div className={styles.__grid}>
            <div className={styles.leftColumn}>
              <Image src={Img} alt="domain" />
            </div>
            <div className={styles.rightColumn}>
              <h2 className={styles.title}>
                We help you take control of your online reputation with advanced
                online reputation management services.
              </h2>
              <p className={styles.para}>
                Your book’s design is crucial for attracting readers, whether on
                a shelf or Amazon. A well-thought cover spark curiosity. Let us
                help you perfect the presentation of your manuscript!
              </p>
              <div className={styles.cta}>
                <CTAGroupLight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
