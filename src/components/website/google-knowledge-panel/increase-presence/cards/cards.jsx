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
        title: "Higher rankings",
        para: "The team’s efforts contributed to an increase in the client’s organic traffic and keyword positions."
    },
    {
        img: Two,
        title: "More high-quality traffic",
        para: "Thanks to Book Marketing, the client’s website traffic increased from 100,000 to more than 2 million per month."
    },
    {
        img: Three,
        title: "More sales",
        para: "Book Marketing helped the client increase sales revenue, customer satisfaction & employee productivity."
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