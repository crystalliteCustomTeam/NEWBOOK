// Css
import style from "./cards.module.css"
// Next
import Image from "next/image"
// Media
import One from "media/paid-ad-campaigns/icons/1.png"
import Two from "media/paid-ad-campaigns/icons/2.png"
import Three from "media/paid-ad-campaigns/icons/3.png"
import Four from "media/paid-ad-campaigns/icons/4.png"

const data = [
    {
        img: One,
        title: "First Consultation",
        para: "We start with a one-on-one conversation to understand your needs and preferences for an advertising strategy."
    },
    {
        img: Two,
        title: "Ad Design and Creation",
        para: "Our talented team creates captivating ads that showcase your USP and engage the right potential customers."
    },
    {
        img: Three,
        title: "Campaign Launch",
        para: "We manage the distribution of your ads across key channels, ensuring optimal timing and positioning."
    },
    {
        img: Four,
        title: "Continuous Management & Optimization",
        para: "We monitor your campaigns and make adjustments to enhance effectiveness and achieve your goals."
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