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
        title: "Engaging Content",
        para: "Our professional writers produce error-free, compelling newsletters tailored to your audience."
    },
    {
        img: Two,
        title: "SEO-Focused Approach",
        para: "Optimize for search and visibility."
    },
    {
        img: Three,
        title: "Experienced Writers",
        para: "Skilled writers crafting engaging, high-quality content."
    },
    {
        img: Four,
        title: "Comprehensive Services",
        para: "From strategy to delivery, we cover all newsletter needs."
    },
    {
        img: Five,
        title: "Affordable Rates",
        para: "Quality content without high costs."
    },
    {
        img: Six,
        title: "Customer Satisfaction",
        para: "Your satisfaction is our priority, with a track record of excellent service."
    },
    {
        img: Seven,
        title: "Concise, Impactful Content",
        para: "We focus on delivering your message clearly."
    },
    {
        img: Eight,
        title: "Eye-Catching Headers and Subheadings",
        para: "For easy navigation and readability."
    },
    {
        img: Nine,
        title: "Bullet Points",
        para: "Breaking down content for quick reads."
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