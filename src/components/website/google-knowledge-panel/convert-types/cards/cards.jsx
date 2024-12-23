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
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
    },
    {
        img: Two,
        title: "Reputable Backlinks",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
    },
    {
        img: Three,
        title: "High-Quality Content",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
    },
    {
        img: Four,
        title: "Google Business Profile",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
    },
    {
        img: Five,
        title: "Technical Issues",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
    },
    {
        img: Six,
        title: "Analysis & Monitoring",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
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