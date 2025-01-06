// Css
import style from "./cards.module.css"
// Next
import Image from "next/image"
// Media
import One from "media/online-reputation-management/icons/8.png"
import Two from "media/online-reputation-management/icons/9.png"
import Three from "media/online-reputation-management/icons/10.png"
import Four from "media/online-reputation-management/icons/11.png"

const data = [
  {
    img: One,
    title: "Thorough Brand Investigation",
    para: "We analyze your online presence to identify strengths, weaknesses, and areas for improvement.",
  },
  {
    img: Two,
    title: "Personalized Reputation Plan",
    para: "We create a personalized strategy to boost brand visibility and address negative concerns.",
  },
  {
    img: Three,
    title: "Live Monitoring",
    para: "Our team monitors your online reputation 24/7 for reviews, mentions, and feedback that could threaten your brand.",
  },
  {
    img: Four,
    title: "Positive Content Generation",
    para: "We create positive content showcasing your achievements, expertise, and customer satisfaction to enhance your brand’s image.",
  },
]

export default function Cards() {
  return (
    <div className={style.root}>
      {data.map(({ img, title, para }, i) => (
        <div key={i} className={`${style.cards} group`}>
          <Image
            src={img}
            alt="domain"
            className="group-hover:brightness-0 group-hover:invert"
          />
          <h3 className={`${style.title} group-hover:text-white`}>{title}</h3>
          <p className={`${style.para} group-hover:text-white`}>{para}</p>
        </div>
      ))}
    </div>
  )
}
