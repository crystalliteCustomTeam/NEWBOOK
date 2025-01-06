// Next
import Image from "next/image"
// Components
import { CTAGroupLight } from "@/components"
// Media
import Screen from "media/print-placement/screen.png"
// Css
import styles from "./capabilities.module.css"
export default function Capabilities() {
  return (
    <section>
      <div className={styles.root}>
        <div className="container">
          <div className={styles.__grid}>
            <div>
              <Image src={Screen} alt="domain" className="mx-auto" />
            </div>
            <div className={styles.content}>
              <h2 className={styles.title}>
                Getting Started with Book Marketing’s Print Placement Services
              </h2>
              <p className={styles.para}>
                To explore how our Print Placement services can enhance your
                marketing efforts, please share your email or phone number
                below. We’ll provide further details on how to effectively
                showcase your brand in print.
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
