// Css
import style from "./cards.module.css"
// Next
import Image from "next/image"
// Media
import One from "media/search-engine-optimization/icons/1.png"
import Two from "media/search-engine-optimization/icons/2.png"
import Three from "media/search-engine-optimization/icons/3.png"
import Four from "media/search-engine-optimization/icons/4.png"
import Five from "media/search-engine-optimization/icons/5.png"
import Six from "media/search-engine-optimization/icons/6.png"

const data = [
  {
    img: One,
    title: "SEO Audits",
    para: "In-depth analysis to identify strengths and weaknesses in your website and develop a strategy accordingly.",
  },
  {
    img: Two,
    title: "Keyword Research",
    para: "Discover high-value keywords to optimize your content effectively.",
  },
  {
    img: Three,
    title: "On-Page Optimization",
    para: "Enhance content, meta tags, and images for improved search visibility.",
  },
  {
    img: Four,
    title: "Technical SEO",
    para: "Address site speed, mobile responsiveness, and other technical aspects.",
  },
  {
    img: Five,
    title: "Content Development",
    para: "Create an efficient plan to bring in maximum engagement from desired demographic.",
  },
  {
    img: Six,
    title: "Link Building",
    para: "Device ethical strategies to improve your site’s authority and trust.",
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
