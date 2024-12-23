// Css
import style from "./cards.module.css"
// Next
import Image from "next/image"
// Media
import One from "media/news-article-publishing/logos/1.png"
import Two from "media/news-article-publishing/logos/2.png"
import Three from "media/news-article-publishing/logos/3.png"
import Four from "media/news-article-publishing/logos/4.png"
import Five from "media/news-article-publishing/logos/5.png"
import Six from "media/news-article-publishing/logos/6.png"

const data = [
    {
        img: One,
        title: "157.9 K",
        desc: "Visitors",
        title2: "80",
        desc2: "Authority"
    },
    {
        img: Two,
        title: "17.6 M",
        desc: "Visitors",
        title2: "80",
        desc2: "Authority"
    },
    {
        img: Three,
        title: "684.4 K",
        desc: "Visitors",
        title2: "79",
        desc2: "Authority"
    },
    {
        img: Four,
        title: "169.0 K",
        desc: "Visitors",
        title2: "70",
        desc2: "Authority"
    },
    {
        img: Five,
        title: "80.3k",
        desc: "Visitors",
        title2: "58",
        desc2: "Authority"
    },
    {
        img: Six,
        title: "24.5 K",
        desc: "Visitors",
        title2: "54",
        desc2: "Authority"
    },
]

export default function Cards() {
    return (
        <div className={style.root}>
            {
                data.map(({ img, title, title2, desc, desc2 }, i) => (
                    <div key={i} className={style.cards}>
                        <Image src={img} alt="domain" height={52} />
                        <div className={style.__grid}>
                            <div>
                                <h3 className={style.title}>
                                    {title}
                                </h3>
                                <span className={style.para}>
                                    {desc}
                                </span>
                            </div>
                            <div>
                                <h3 className={style.title}>
                                    {title2}
                                </h3>
                                <span className={style.para}>
                                    {desc2}
                                </span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}