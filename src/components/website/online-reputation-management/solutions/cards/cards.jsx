// Css
import style from "./cards.module.css"
// Next
import Image from "next/image"
// Media
import One from "media/online-reputation-management/icons/8.png"
import Two from "media/online-reputation-management/icons/9.png"
import Three from "media/online-reputation-management/icons/10.png"
import Four from "media/online-reputation-management/icons/11.png"

const data = [
    {
        img: One,
        title: "Reputation Analysis",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
    },
    {
        img: Two,
        title: "Content Creation",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
    },
    {
        img: Three,
        title: "Publishing",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
    },
    {
        img: Four,
        title: "Promotion",
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