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
        title: "Conceptualization",
        para: "Develop a concept, tone, and message for your trailer."
    },
    {
        img: Two,
        title: "Footage Gathering",
        para: "Collect necessary footage, whether new or existing."
    },
    {
        img: Three,
        title: "Editing",
        para: "Edit the footage into a cohesive and engaging trailer."
    },
    {
        img: Four,
        title: "Promotion",
        para: "Promote your trailer across various channels."
    },
    {
        img: Five,
        title: "Ongoing Efforts",
        para: "Support continuous promotion even after the release."
    },
    {
        img: Six,
        title: "Comprehensive Support",
        para: "Our team guides you through every step, from concept to promotion."
    }
]

export default function Cards() {
    return (
        <div className={style.root}>
            {
                data.map(({img, title, para }, i) => (
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