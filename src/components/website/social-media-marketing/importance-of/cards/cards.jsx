// Css
import styles from "./cards.module.css"
// Next
import Image from "next/image"
// Media
import One from "media/social-media-marketing/importance-of/1.png"
import Two from "media/social-media-marketing/importance-of/2.png"
import Three from "media/social-media-marketing/importance-of/3.png"
import Four from "media/social-media-marketing/importance-of/4.png"

const data = [
    {
        img: One,
        title: "Brand Awareness",
        para: "Most online customers these days are likely to say they discovered a new brand on social media..."
    },
    {
        img: Two,
        title: "Customer Engagement",
        para: "Maintaining customer engagement is vital to the success of a brand on social media."
    },
    {
        img: Three,
        title: "Increased Traffic",
        para: "Most online customers these days are likely to say they discovered a new brand on social media..."
    },
    {
        img: Four,
        title: "Higher Sales & Revenue",
        para: "There are many factors that determine the success of a social media campaign."
    }
]

export default function Cards() {
    return (
        <div className={styles._grid}>
            {
                data.map(({ img, title, para }, i) => (
                    <div key={i} className={`${styles.cards} group`}>
                        <Image src={img} alt="domain" className={`${styles.img} group-hover:brightness-0 group-hover:invert`} />
                        <h3 className={`${styles.title} group-hover:text-white`}>{title}</h3>
                        <p className={`${styles.para} group-hover:text-white`}>
                            {para}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}