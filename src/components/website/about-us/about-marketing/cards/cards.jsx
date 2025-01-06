// Css
import styles from "./cards.module.css"

const data = [
  [
    "Mission",
    "Our mission is to help writers turn their dreams into reality. Our team provides authors with the tools and support they need to share their stories with the world.",
  ],
  [
    "Vision",
    "Our vision is to establish a world for writers where they have the confidence to shed light on what words they have tailored together to fashion a remarkable piece of creativity. ",
  ],
  [
    "Values",
    "we believe in allowing every writer to give meaning to their imagination, sharing it with the world in the best words possible. Every story roots from yet another story. We at Book Marketing value the essence of every imagination.",
  ],
  [
    "Our Story",
    "It was all an effort to break free from the stagnancy of a 9-to-5 job and embark on a more creative journey. Project after project, the excitement of storytelling and refining raw ideas into a polished form transformed our narrative, and here we are.",
  ],
]

export default function Cards() {
  return (
    <div className={styles.root}>
      {data.map(([title, desc]) => (
        <div key={title} className={`${styles.cards} group`}>
          <h3
            className={`${styles.title} group-hover:text-white`}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className={`${styles.para} group-hover:text-white`}>{desc}</p>
        </div>
      ))}
    </div>
  )
}
