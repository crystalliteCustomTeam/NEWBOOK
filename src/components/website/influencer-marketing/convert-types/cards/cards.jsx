// Css
import style from "./cards.module.css"
// Next
import Image from "next/image"
// Media
import One from "media/tv-interviews/icons/1.png"
import Two from "media/tv-interviews/icons/2.png"
import Three from "media/tv-interviews/icons/3.png"
import Four from "media/tv-interviews/icons/4.png"
import Five from "media/tv-interviews/icons/5.png"
import Six from "media/tv-interviews/icons/6.png"

const data = [
    {
        img: One,
        title: "Influencer Marketing Advantage",
        para: "Leverage influencer marketing as a modern approach to elevate brand presence."
    },
    {
        img: Two,
        title: "Boost Brand Awareness",
        para: "Collaborate with creators sharing your brand's values to increase engagement and awareness."
    },
    {
        img: Three,
        title: "Drive Conversions",
        para: "Influencer partnerships strategically designed to resonate with your audience, converting attention into action."
    },
    {
        img: Four,
        title: "Influencer Matchmaking",
        para: "Connect your brand with influencers whose audiences align with your mission for authentic, impactful partnerships."
    },
    {
        img: Five,
        title: "Multi-Channel Campaigns",
        para: "Campaigns launched across diverse platforms, maximizing reach and visibility."
    },
    {
        img: Six,
        title: "Real-Time Performance Metrics",
        para: "Data-driven insights for ongoing adjustments to ensure each campaign’s success and optimal performance."
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