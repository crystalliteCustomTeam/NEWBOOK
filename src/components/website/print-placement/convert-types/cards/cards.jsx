// Css
import style from "./cards.module.css"

const data = [
  {
    title: "Strategic Placement",
    para: "Place your brand in magazines, newspapers, and articles that align with your targeted market.",
  },
  {
    title: "Precise Content",
    para: "Create engaging articles to encourage positive reader interaction toward your brand and book.",
  },
  {
    title: "Shared Values",
    para: "Share your tips and tricks with like-minded people so they can learn from you.",
  },
  {
    title: "Tactical Consultations",
    para: "Consult with us to define your objectives and identify the right publications for your target demographic.",
  },
  {
    title: "Specialized Plannings",
    para: "Our team creates engaging articles or press releases to highlight your brand or book.",
  },
  {
    title: "Audience Engagement",
    para: "We manage submissions and amplify the reach of your print features to engage your audience.",
  },
]

export default function Cards() {
  return (
    <div className={style.root}>
      {data.map(({ title, para }, i) => (
        <div key={i} className={`${style.cards} group`}>
          <h3 className={`${style.title} group-hover:text-white`}>{title}</h3>
          <p className={`${style.para} group-hover:text-white`}>{para}</p>
        </div>
      ))}
    </div>
  )
}
