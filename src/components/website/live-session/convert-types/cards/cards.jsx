// Css
import style from "./cards.module.css"
const data = [
  {
    title: "Interactive Reader Engagement",
    para: "Connect directly with readers in real-time.",
  },
  {
    title: "Expert Guidance",
    para: "Receive personalized advice from industry professionals.",
  },
  {
    title: "Skill Improvement",
    para: "Enhance your writing through expert tips and insights.",
  },
  {
    title: "Author Networking",
    para: "Build connections with fellow authors in a supportive space.",
  },
  {
    title: "Publishing Insights",
    para: "Gain valuable knowledge about the publishing process.",
  },
  {
    title: "Convenience",
    para: "Enjoy these benefits from the comfort of your home.",
  },
]

export default function Cards() {
  return (
    <div className={style.root}>
      {data.map(({ img, title, para }, i) => (
        <div key={i} className={`${style.cards} group`}>
        <h3 className={`${style.title} group-hover:text-white`}>
            {title}
        </h3>
        <p className={`${style.para} group-hover:text-white`}>
            {para}
        </p>
    </div>
      ))}
    </div>
  )
}
