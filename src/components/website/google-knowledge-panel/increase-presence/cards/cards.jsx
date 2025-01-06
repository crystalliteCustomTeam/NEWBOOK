// Css
import style from "./cards.module.css"
// Next
import Image from "next/image"
// Media
import One from "media/google-knowledge-panel/icons/7.png"
import Two from "media/google-knowledge-panel/icons/8.png"
import Three from "media/google-knowledge-panel/icons/9.png"
const data = [
    {
        img: One,
        title: "Skilled SEO Specialists",
        para: "Our team specializes in creating Google-friendly, high-ranking content."
    },
    {
        img: Two,
        title: "Comprehensive Approach",
        para: "We manage everything from profile setup to continuous optimization for your Google Knowledge Panel."
    },
    {
        img: Three,
        title: "Affordable Pricing",
        para: "Gain high-quality service without exceeding your budget."
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