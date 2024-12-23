// Css
import styles from "./cards.module.css"
// Next
import Image from "next/image"
// Media
import One from "media/podcast/icons/1.png"
import Two from "media/podcast/icons/2.png"
import Three from "media/podcast/icons/3.png"
import Four from "media/podcast/icons/4.png"

const data = [
    {
        img: One,
        title: "Explore Podcasts",
        para: "Odio duis nullam turpis mattis tristique hac. Nec cursus non molestie velit. Nunc aliquet"
    },
    {
        img: Two,
        title: "Exclusive Merchandise",
        para: "Odio duis nullam turpis mattis tristique hac. Nec cursus non molestie velit. Nunc aliquet"
    },
    {
        img: Three,
        title: "Podcasters' Room",
        para: "Odio duis nullam turpis mattis tristique hac. Nec cursus non molestie velit. Nunc aliquet"
    },
    {
        img: Four,
        title: "Stay Informed",
        para: "Odio duis nullam turpis mattis tristique hac. Nec cursus non molestie velit. Nunc aliquet"
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