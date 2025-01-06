// Css
import style from "./cards.module.css"
// Next
import Image from "next/image"
// Media
import One from "media/online-reputation-management/icons/2.png"
import Two from "media/online-reputation-management/icons/3.png"
import Three from "media/online-reputation-management/icons/4.png"
import Four from "media/online-reputation-management/icons/5.png"
import Five from "media/online-reputation-management/icons/6.png"
import Six from "media/online-reputation-management/icons/7.png"

const data = [
  {
    img: One,
    title: "Enhanced Online Presence",
    para: "Build a strong, positive brand image.",
  },
  {
    img: Two,
    title: "Strategic Management",
    para: "Maintain control of your brand's online reputation.",
  },
  {
    img: Three,
    title: "Customer Feedback Monitoring",
    para: "Track and respond to reviews and comments effectively.",
  },
  {
    img: Four,
    title: "Positive Engagement",
    para: "Showcase the best side of your business to audiences.",
  },
  {
    img: Five,
    title: "Reputation Protection",
    para: "Proactively address negative content or misinformation.",
  },
  {
    img: Six,
    title: "Trust Building",
    para: "Foster customer trust through consistent, attentive responses.",
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
