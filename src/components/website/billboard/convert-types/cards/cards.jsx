// Css
import style from "./cards.module.css"
// Next
import Image from "next/image"
// Media
import One from "media/billboard/cards/1.png"
import Two from "media/billboard/cards/2.png"
import Three from "media/billboard/cards/3.png"
import Four from "media/billboard/cards/4.png"
import Five from "media/billboard/cards/5.png"
import Six from "media/billboard/cards/6.png"
const data = [
  {
    img: One,
    title: "Track Record",
    para: "Consistent success across campaigns.",
  },
  {
    img: Two,
    title: "Expert Team",
    para: "Skilled marketers crafting impactful campaigns.",
  },
  {
    img: Three,
    title: "Cost-Effective Solutions",
    para: "Packages to fit any budget.",
  },
  {
    img: Four,
    title: "Extensive Network",
    para: "Top placements for maximum exposure.",
  },
  {
    img: Five,
    title: "In-Depth Knowledge",
    para: "Industry insight to boost success.",
  },
  {
    img: Six,
    title: "Results-driven",
    para: "Every campaign is tailored for measurable impact.",
  },
]

export default function Cards() {
  return (
    <div className={style.root}>
      {data.map(({ img, title, para }, i) => (
        <div key={i} className={`${style.cards} group`}>
          <Image src={img} alt="domain" className="group-hover:opacity-100" />
          <span className="group-hover:opacity-100"></span>
          <h3 className={`${style.title} group-hover:text-white`}>{title}</h3>
          <p className={`${style.para} group-hover:text-white`}>{para}</p>
        </div>
      ))}
    </div>
  )
}
