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
        title: "Specialized Expertise",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
    },
    {
        img: Two,
        title: "Cost Affective Solution",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
    },
    {
        img: Three,
        title: "Tailored Contents",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
    },
    {
        img: Four,
        title: "Captivating Writing",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
    },
    {
        img: Five,
        title: "Design & Formatting",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
    },
    {
        img: Six,
        title: "Launch & Distribution",
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