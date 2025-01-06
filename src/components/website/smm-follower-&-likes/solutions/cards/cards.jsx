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
        title: "Reputation Analysis",
        para: "Delivering top services to connect your target audience with your content."
    },
    {
        img: Two,
        title: "Content Creation",
        para: "Amplified brand recognition focusing on audience attention."
    },
    {
        img: Three,
        title: "Publishing",
        para: "Enhanced brand loyalty fostering loyalty through consistent social media marketing."
    },
    {
        img: Four,
        title: "Promotion",
        para: "Consistent engagement keeps your audience connected to your brand."
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