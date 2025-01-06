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
        para: "We analyze your book and brand's online perception, identifying areas for improvement to help build a positive reputation that connects with your readers."
    },
    {
        img: Two,
        title: "Content Creation",
        para: "We create compelling, optimized content—from author bios to book summaries—that boosts your visibility, enhances your Google Knowledge Panel, and attracts more readers."
    },
    {
        img: Three,
        title: "Publishing",
        para: "We ensure your content reaches the right platforms, maximizing impact, building credibility, and increasing online exposure for your brand."
    },
    {
        img: Four,
        title: "Promotion",
        para: "Boost your book’s reach with targeted strategies that maximize visibility across digital channels, driving engagement and enhancing your online presence."
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