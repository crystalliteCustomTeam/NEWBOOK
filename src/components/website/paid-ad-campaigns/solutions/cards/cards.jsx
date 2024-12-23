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
        title: "Super Scalable",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
    },
    {
        img: Two,
        title: "Platform Integrations",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
    },
    {
        img: Three,
        title: "See Insights",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
    },
    {
        img: Four,
        title: "White Label Ready",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
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