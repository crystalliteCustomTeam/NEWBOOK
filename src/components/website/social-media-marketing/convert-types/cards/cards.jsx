// Css
import style from "./cards.module.css"
// Next
import Image from "next/image"
// Media
import One from "media/social-media-marketing/convert-types/1.png"
import Two from "media/social-media-marketing/convert-types/2.png"
import Three from "media/social-media-marketing/convert-types/3.png"
import Four from "media/social-media-marketing/convert-types/4.png"
import Five from "media/social-media-marketing/convert-types/5.png"
import Six from "media/social-media-marketing/convert-types/6.png"
import Seven from "media/social-media-marketing/convert-types/7.png"
import Eight from "media/social-media-marketing/convert-types/8.png"
import Nine from "media/social-media-marketing/convert-types/9.png"

const data = [
    {
        img: One,
        title: "Photography",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        img: Two,
        title: "Copywriting",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        img: Three,
        title: "Photo Manipulation",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        img: Four,
        title: "Video Production",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        img: Five,
        title: "Illustrations",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        img: Six,
        title: "Live Social Broadcasts",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        img: Seven,
        title: "Clear and Concise",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        img: Eight,
        title: "Everything is Data-Driven",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        img: Nine,
        title: "Customized Approach",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
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