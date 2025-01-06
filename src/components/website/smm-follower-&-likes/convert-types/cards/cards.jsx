// Css
import style from "./cards.module.css"
// Next
import Image from "next/image"
// Media
import One from "media/smm-follower-&-likes/icons/1.png"
import Two from "media/smm-follower-&-likes/icons/2.png"
import Three from "media/smm-follower-&-likes/icons/3.png"
import Four from "media/smm-follower-&-likes/icons/4.png"
import Five from "media/smm-follower-&-likes/icons/5.png"
import Six from "media/smm-follower-&-likes/icons/6.png"

const data = [
  {
    img: One,
    title: "Amplifying Social Following",
    para: "We optimize your profile to attract the right audience, not just followers.",
  },
  {
    img: Two,
    title: "Your Idea, Our Creation",
    para: "Book Marketing helps bring your ideas to life. Stuck on execution? We've got you covered!",
  },
  {
    img: Three,
    title: "Innovative Marketing Strategies",
    para: "We sell your story uniquely with personalized marketing strategies designed exclusively for you.",
  },
  {
    img: Four,
    title: "Monitoring Analytics",
    para: "Book Marketing is data-driven. We analyze traffic engagement and move accordingly.",
  },
  {
    img: Five,
    title: "Engaging Content Creation",
    para: "Captivate your audience with high-quality, engaging content that aligns with your brand's voice.",
  },
  {
    img: Six,
    title: "Targeted Campaigns",
    para: "Maximize your reach with campaigns tailored to your ideal reader demographics.",
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
