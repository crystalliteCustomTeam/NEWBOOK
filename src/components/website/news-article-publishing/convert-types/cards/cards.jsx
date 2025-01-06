// Css
import style from "./cards.module.css"
// Next
import Image from "next/image"
// Media
import One from "media/email-newsletter/icons/1.png"
import Two from "media/email-newsletter/icons/2.png"
import Three from "media/email-newsletter/icons/3.png"
import Four from "media/email-newsletter/icons/4.png"
import Five from "media/email-newsletter/icons/5.png"
import Six from "media/email-newsletter/icons/6.png"
import Seven from "media/email-newsletter/icons/7.png"
import Eight from "media/email-newsletter/icons/8.png"
import Nine from "media/email-newsletter/icons/9.png"

const data = [
    {
        img: One,
        title: "Top-Rated Quality",
        para: "Skilled, seasoned writers ensure engaging, well-researched articles."
    },
    {
        img: Two,
        title: "Creative and Unique",
        para: "Content that’s memorable and stands out."
    },
    {
        img: Three,
        title: "SEO-Optimized Content",
        para: "Brand visibility that actually reaches rank on search engines."
    },
    {
        img: Four,
        title: "Affordable Packages",
        para: "Best value with our cost-effective services."
    },
    {
        img: Five,
        title: "Real-Time Collaboration",
        para: "Work with your team in real-time to edit and refine articles."
    },
    {
        img: Six,
        title: "Automated Formatting",
        para: "Save time with automated formatting for consistently professional articles."
    },
    {
        img: Seven,
        title: "Multi-Platform Publishing: ",
        para: "Publish across multiple platforms simultaneously to reach wider audience."
    },
    {
        img: Eight,
        title: "Detailed Analytics",
        para: "Gain insights into your article performance with our built-in analytics."
    },
    {
        img: Nine,
        title: "Seamless Integration",
        para: "Our platform integrates seamlessly with your systems for a smooth publishing process."
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