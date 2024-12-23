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
        title: "Email Templates Gallery",
        para: "A diverse collection of pre-designed email templates for every occasion."
    },
    {
        img: Two,
        title: "Custom Fonts Support",
        para: "Upload free or purchased fonts that align more closely with your brand's identity."
    },
    {
        img: Three,
        title: "Layout View",
        para: "Easily move through modules and elements, rearrange them, hide, or add new ones."
    },
    {
        img: Four,
        title: "Version History",
        para: "Securely access and restore previous files from anywhere with cloud backup."
    },
    {
        img: Five,
        title: "Manage Content",
        para: "Enhance modules with text, links, and images using hyper-intuitive visual editor."
    },
    {
        img: Six,
        title: "Mobile Ready",
        para: "Create fully responsive, retina-ready emails optimized for desktop and mobile viewing."
    },
    {
        img: Seven,
        title: "Clean Code",
        para: "We export the code that’s easy to understand and easy to change if you have to."
    },
    {
        img: Eight,
        title: "Direct Email Preview",
        para: "Send and verify templates directly through your or your teammate's email client."
    },
    {
        img: Nine,
        title: "One-click Export",
        para: "It’s just one magical click to export to your favorite email marketing tool."
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