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
        title: "Set Your Goal",
        para: "Define the purpose of your billboard—boost visibility, drive book sales, and create buzz."
    },
    {
        img: Two,
        title: "Choose the Right Billboard",
        para: "Select a high-traffic spot in Times Square aligning with your budget and audience reach."
    },
    {
        img: Three,
        title: "Design Eye-Catching Content",
        para: "Create bold visuals that grabs attention and delivers your brand instantly."
    },
    {
        img: Four,
        title: "Promote the Launch",
        para: "Share the Times Square moment on social media and with press outlets to amplify the impact of your billboard."
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