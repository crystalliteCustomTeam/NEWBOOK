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
    title: "Digital Godzilla Billboards",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    img: Two,
    title: "Digital Big Kahuna Billboards",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
  },
  {
    img: Three,
    title: "20 Times Square Billboards",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
  },
  {
    img: Four,
    title: "1560 Broadway Billboards",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
  },
  {
    img: Five,
    title: "Thomson Reuters Billboards",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
  },
  {
    img: Six,
    title: "The Takeover Billboards",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
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
            className="group-hover:opacity-100"
          />
          <span className="group-hover:opacity-100"></span>
          <h3 className={`${style.title} group-hover:text-white`}>{title}</h3>
          <p className={`${style.para} group-hover:text-white`}>{para}</p>
        </div>
      ))}
    </div>
  )
}
