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
        title: "Represented Creators",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
    },
    {
        img: Two,
        title: "Avg ROAs increase",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
    },
    {
        img: Three,
        title: "Talent Verticals",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
    },
    {
        img: Four,
        title: "Avg CAC reduction",
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