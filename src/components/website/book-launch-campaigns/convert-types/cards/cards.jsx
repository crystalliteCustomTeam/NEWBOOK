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
    title: "Social Media Marketing",
    para: "Harness social platforms to promote your book.",
  },
  {
    img: Two,
    title: "Email Marketing Plans",
    para: "Boost your listings and subscriptions today!",
  },
  {
    img: Three,
    title: "Advertising Plans",
    para: "Strategically market your book to attract attention.",
  },
  {
    img: Four,
    title: "SEO Services",
    para: "Our proven strategies ensure your book stands out.",
  },
  {
    img: Five,
    title: "Influencer Marketing",
    para: "Expand your reach by collaborating with influencers who resonate with your book's audience.",
  },
  {
    img: Six,
    title: "Content Strategy",
    para: "Develop a comprehensive content plan aligning with your launch goals.",
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
