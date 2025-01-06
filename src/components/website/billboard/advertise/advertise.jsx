// Css
import { CTAGroupLight } from "@/components"
import styles from "./advertise.module.css"
export default function Advertise() {
  const data = [
    {
      title: "90%",
      desc: "Public opinion of Times SQ - 90% consider TSQ as the most recognizable part of NYC.",
    },
    {
      title: "243K+",
      desc: "Daily Social Mentions - Over 243K+ people post about Times Square on social media daily.",
    },
    {
      title: "286K+",
      desc: "Average Daily Pedestrian Count - Over 286K+ pedestrians passing through daily.",
    },
  ]
  return (
    <section>
      <div className={styles.root}>
        <div className="container">
          <div className={styles.content}>
            <h2 className={styles.title}>
            Take Your Brand to New Heights with Book Marketing!
            </h2>
            <p className={styles.para}>
            Take Your Brand to New Heights with Book Marketing!
            </p>
            <p className={styles.para}>
            Times Square, one of the world’s most iconic locations and a top tourist attraction, sees approximately 330,000 people passing through daily. With such a vast audience, it’s the perfect place to communicate your message through its famous billboards and digital screens. As a leading media buyer, Book Marketing can help connect you with New York audiences through effective Times Square advertising campaigns, showcasing your brand in one of the world’s most photographed landmarks.
            </p>
          </div>
          <div className={styles.__grid}>
            {data &&
              data?.map(({ title, desc }, i) => (
                <div
                  key={i}
                  className={styles.card}
                >
                  <h3 className={styles.title}>
                    {title}
                  </h3>
                  <span className={styles.desc}>
                    {desc}
                  </span>
                </div>
              ))}
          </div>
          <div className={styles.cta}>
            <CTAGroupLight />
          </div>
        </div>
      </div>
    </section>
  )
}
