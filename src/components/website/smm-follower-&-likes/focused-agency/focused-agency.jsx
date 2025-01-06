// Next
import Image from "next/image"
// Components
import { CTAGroupLight } from "@/components"
// Media
import Followers from "media/smm-follower-&-likes/followers.png"
// Css
import styles from "./focused-agency.module.css"
export default function FocusedAgency() {
  return (
    <section>
      <div className={styles.root}>
        <div className="container">
          <div className={styles.__grid}>
            <div>
              <Image src={Followers} alt="domain" className="mx-auto" />
            </div>
            <div className={styles.content}>
              <h2 className={styles.title}>
                Experience a whole new dynamics of social media marketing at
                Book Marketing, where ideas meet innovations.
              </h2>
              <p className={styles.para}>
                Get Your Brand Noticed Today with Book Marketing!
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
