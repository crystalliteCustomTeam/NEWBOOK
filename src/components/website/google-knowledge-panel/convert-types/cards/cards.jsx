// Css
import style from "./cards.module.css"
// Next
import Image from "next/image"
// Media
import One from "media/google-knowledge-panel/icons/1.png"
import Two from "media/google-knowledge-panel/icons/2.png"
import Three from "media/google-knowledge-panel/icons/3.png"
import Four from "media/google-knowledge-panel/icons/4.png"
import Five from "media/google-knowledge-panel/icons/5.png"
import Six from "media/google-knowledge-panel/icons/6.png"
const data = [
  {
    img: One,
    title: "Keyword Research",
    para: "Boost your book’s visibility with strategic keywords that connect it to the right audience. We’ll find the best keywords to elevate your brand in a competitive market.",
  },
  {
    img: Two,
    title: "Reputable Backlinks",
    para: "Strengthen your online credibility with trusted backlinks that increase your authority and improve your search presence, bringing readers directly to you.",
  },
  {
    img: Three,
    title: "High-Quality Content",
    para: "Capture readers’ attention with engaging, SEO-optimized content that tells your story effectively while supporting your knowledge panel visibility.",
  },
  {
    img: Four,
    title: "Google Business Profile",
    para: "Enhance your book’s digital footprint with an optimized Google Business Profile, ensuring your brand’s key information is accessible and reliable.",
  },
  {
    img: Five,
    title: "Technical Issues",
    para: "Our experts resolve technical barriers hindering your online presence, ensuring a seamless journey for readers to discover your work.",
  },
  {
    img: Six,
    title: "Analysis & Monitoring",
    para: "Our monitoring keeps track of your online reputation, ensuring your brand remains in a positive light.",
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
