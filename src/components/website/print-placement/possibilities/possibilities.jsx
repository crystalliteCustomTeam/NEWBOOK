// Next
import Image from "next/image"
// Media
import PossibilityImg1 from "media/print-placement/possibilities/1.png"
import PossibilityImg2 from "media/print-placement/possibilities/2.png"
import PossibilityImg3 from "media/print-placement/possibilities/3.png"
// Css
import styles from "./possibilities.module.css"
export default function Possibilities() {
  return (
    <section>
      <div className={styles.root}>
        <div className="container">
          <div>
            <h2 className={styles.title}>
              Take Branding to the Next Step With Book Marketing’s Print
              Placement
            </h2>
          </div>
          <div className={styles.__grid}>
            {[
              [
                PossibilityImg1,
                "Eager to be featured in the next issue of your favorite magazine?",
              ],
              [
                PossibilityImg2,
                "Imagine your book in that famous magazine along with the hottest celebrity gossip!",
              ],
              [
                PossibilityImg3,
                "Contact us today to learn more about our Print Placement services that can benefit your business and author journey.",
              ],
            ].map(([img, desc], i) => (
              <div key={i} className={styles.card}>
                <div className={styles.imgCard}>
                  <Image src={img} alt="domain" className={styles.img} />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.title}>Book Marketing</h3>
                  <p className={styles.desc}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
