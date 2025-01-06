// Next
import Image from "next/image"
// Components
import { CTAGroupLight } from "@/components"
// Css
import styles from "./numbers-speak.module.css"
// Media
import Graph from "media/paid-ad-campaigns/graph.png"
export default function NumbersSpeak() {
  return (
    <section>
      <div className={styles.root}>
        <div className="container">
          <div className={styles.content}>
            <h2 className={styles.title}>We Let Our Numbers Do the Talking!</h2>
            <p className={styles.para}>
              At Book Marketing, we guarantee results with both paid and organic
              marketing. If our 3-month performance doesn’t deliver ROI, clients
              can receive free services until they see positive results – that's
              how confident we are!
            </p>
            <div className={styles.cta}>
              <CTAGroupLight />
            </div>
          </div>
          <Image src={Graph} alt="domain" />
        </div>
      </div>
    </section>
  )
}
