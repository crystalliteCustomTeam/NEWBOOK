// Css
import style from "./cards.module.css"
// Next
import Image from "next/image"
// Media
import One from "media/social-media-marketing/convert-types/1.png"
import Two from "media/social-media-marketing/convert-types/2.png"
import Three from "media/social-media-marketing/convert-types/3.png"
import Four from "media/social-media-marketing/convert-types/4.png"
import Five from "media/social-media-marketing/convert-types/5.png"
import Six from "media/social-media-marketing/convert-types/6.png"
import Seven from "media/social-media-marketing/convert-types/7.png"
import Eight from "media/social-media-marketing/convert-types/8.png"
import Nine from "media/social-media-marketing/convert-types/9.png"

const data = [
  {
    img: One,
    title: "Optimize ",
    para: "your profile to deliver your brand’s identity. ",
  },
  {
    img: Two,
    title: "Create ",
    para: "high-quality content that encourages interaction",
  },
  {
    img: Three,
    title: "Develope targeted ad ",
    para: "to create your own community",
  },
  {
    img: Four,
    title: "Performe analysis ",
    para: "to keep track of performance metrics evaluating your brand’s growth.",
  },
  {
    img: Five,
    title: "Create cohesive visuals",
    para: "across platforms reflecting your brand.",
  },
  {
    img: Six,
    title: "Create engaging stories ",
    para: "highlighting your brand.",
  },
  {
    img: Seven,
    title: "Optimize posting schedules ",
    para: "to reach your audience at peak times.",
  },
  {
    img: Eight,
    title: "Engaging with Followers to",
    para: "foster a community.",
  },
  {
    img: Nine,
    title: "Leveraging Influencer ",
    para: "partnerships for broader reach.",
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
