// Css
import styles from "./cards.module.css"
// Next
import Image from "next/image"
// Media
import One from "media/podcast/icons/1.png"
import Two from "media/podcast/icons/2.png"
import Three from "media/podcast/icons/3.png"
import Four from "media/podcast/icons/4.png"

const data = [
  {
    img: One,
    title: "Initial Consultation",
    para: "Understand your goals, audience, and podcast themes to create a tailored approach.",
  },
  {
    img: Two,
    title: "Content Development",
    para: "Organize and write episodes that showcase your message and area of expertise. ",
  },
  {
    img: Three,
    title: "Recording and Editing",
    para: "We handle the technical aspects of recording and editing to ensure expert sound quality and a polished result. ",
  },
  {
    img: Four,
    title: "Distribution and Promotion",
    para: "We use strategies to promote your episodes, grow your following, and share your podcast on major platforms. ",
  },
]

export default function Cards() {
  return (
    <div className={styles._grid}>
      {data.map(({ img, title, para }, i) => (
        <div key={i} className={`${styles.cards} group`}>
          <Image
            src={img}
            alt="domain"
            className={`${styles.img} group-hover:brightness-0 group-hover:invert`}
          />
          <h3 className={`${styles.title} group-hover:text-white`}>{title}</h3>
          <p className={`${styles.para} group-hover:text-white`}>{para}</p>
        </div>
      ))}
    </div>
  )
}
