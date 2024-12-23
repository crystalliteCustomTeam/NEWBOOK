// Next
import Image from "next/image"
// Css
import styles from "./score.module.css"
// Media
import Session from "media/live-session/session.png"
export default function Score() {
  return (
    <section>
      <div className={styles.root}>
        <div className="container">
          <div className={styles.content}>
            <h2 className={styles.title}>
              Score A+ Grades With Our Live Sessions
            </h2>
            <p className={styles.para}>
              Achieve Academic Excellence Through Our Live Sessions With Book
              Marketing
            </p>
          </div>
          <div className={styles.img}>
            <Image src={Session} alt="domain" />
          </div>
        </div>
      </div>
    </section>
  )
}
