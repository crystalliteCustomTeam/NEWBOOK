// Css
import style from "./cards.module.css"
// Next
import Image from "next/image"
// Media
import One from "media/amazon-optimization/icons/7.png"
import Two from "media/amazon-optimization/icons/8.png"
import Three from "media/amazon-optimization/icons/9.png"
import Four from "media/amazon-optimization/icons/10.png"

const data = [
    {
        img: One,
        title: "Authenticity & Trust",
        para: "Access trusted influencers who connect with your potential customers."
    },
    {
        img: Two,
        title: "High Engagement",
        para: "Drive interaction with relevant content tailored to your audience."
    },
    {
        img: Three,
        title: "Data-Driven Insights",
        para: "Make informed decisions with our in-depth analytics on influencer performance."
    },
    {
        img: Four,
        title: "Scalable Campaigns",
        para: "From local to global audiences, our campaigns are designed to scale with your brand's growth."
    }
]

export default function Cards() {
    return (
        <div className={style.root}>
            {
                data.map(({ img, title, para }, i) => (
                    <div key={i} className={`${style.cards} group`}>
                        <Image src={img} alt="domain" className="group-hover:brightness-0 group-hover:invert" />
                        <h3 className={`${style.title} group-hover:text-white`}>
                            {title}
                        </h3>
                        <p className={`${style.para} group-hover:text-white`}>
                            {para}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}