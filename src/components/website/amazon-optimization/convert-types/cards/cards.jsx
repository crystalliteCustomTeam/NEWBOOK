// Css
import style from "./cards.module.css"
// Next
import Image from "next/image"
// Media
import One from "media/amazon-optimization/icons/1.png"
import Two from "media/amazon-optimization/icons/2.png"
import Three from "media/amazon-optimization/icons/3.png"
import Four from "media/amazon-optimization/icons/4.png"
import Five from "media/amazon-optimization/icons/5.png"
import Six from "media/amazon-optimization/icons/6.png"

const data = [
    {
        img: One,
        title: "Amazon PPC",
        para: "Enable your business’ Amazon visibility to drive targeted sales with cost-savvy strategies."
    },
    {
        img: Two,
        title: "Amazon DSP",
        para: "Attract potential customers on and off Amazon with ads meant for your audience."
    },
    {
        img: Three,
        title: "External Traffic",
        para: "Insufficient traffic on Amazon? Redirect some traffic from external sources to your listings."
    },
    {
        img: Four,
        title: "Amazon Marketing",
        para: "Let integrated marketing expand your business by advertising on Amazon."
    },
    {
        img: Five,
        title: "Listing Creation",
        para: "Create specific product pages that target your desired audience on Amazon."
    },
    {
        img: Six,
        title: "Amazon PPC Audit",
        para: "Re-evaluate your campaigns with a thorough Amazon PPC audit to reduct investment and maximize profits."
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