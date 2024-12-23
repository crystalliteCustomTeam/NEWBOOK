// Css
import style from "./cards.module.css"
// Media
import One from "media/home/trending-podcast/1.png"
import Two from "media/home/trending-podcast/2.png"
import Three from "media/home/trending-podcast/3.png"
import Four from "media/home/trending-podcast/4.png"
import Five from "media/home/trending-podcast/5.png"
import Six from "media/home/trending-podcast/6.png"
import Play from "media/home/trending-podcast/play.png"
import Mic from "media/home/trending-podcast/mic.png"
import Clock from "media/home/trending-podcast/clock.png"
import Folder from "media/home/trending-podcast/folder.png"
// Next
import Image from "next/image"
import Link from "next/link"

const data = [
    {
        img: One,
        episode: "Episode: 12",
        title: "Tech Talk: Future of Marketing",
        name: "John Smith",
        duration: "8Hr 36M",
        category: "Technology",
        desc: "Ligula viverra consectetur velit interdum. Tempus aliquam senectus facilisis condimentum tortor libero maecenas arcu pellentesque.",
        cta: "Share This Episode"
    },
    {
        img: Two,
        episode: "Episode: 23",
        title: "Uncovering Ancient Mysteries",
        name: "Sarah Johnson",
        duration: "8Hr 36M",
        category: "History",
        desc: "Ligula viverra consectetur velit interdum. Tempus aliquam senectus facilisis condimentum tortor libero maecenas arcu pellentesque.",
        cta: "Share This Episode"
    },
    {
        img: Three,
        episode: "Episode: 35",
        title: "Mindful Living: Finding Inner Peace",
        name: "Emily Parker",
        duration: "8Hr 36M",
        category: "Health & Wellness",
        desc: "Ligula viverra consectetur velit interdum. Tempus aliquam senectus facilisis condimentum tortor libero maecenas arcu pellentesque.",
        cta: "Share This Episode"
    },
    {
        img: Four,
        episode: "Episode: 46",
        title: "Economic Insights: Global Markets",
        name: "David Ramirez",
        duration: "8Hr 36M",
        category: "Business & Finance",
        desc: "Ligula viverra consectetur velit interdum. Tempus aliquam senectus facilisis condimentum tortor libero maecenas arcu pellentesque.",
        cta: "Share This Episode"
    },
    {
        img: Five,
        episode: "Episode: 73",
        title: "Uncovering Ancient Mysteries",
        name: "Sarah Johnson",
        duration: "8Hr 36M",
        category: "History",
        desc: "Ligula viverra consectetur velit interdum. Tempus aliquam senectus facilisis condimentum tortor libero maecenas arcu pellentesque.",
        cta: "Share This Episode"
    },
    {
        img: Six,
        episode: "Episode: 54",
        title: "Mindful Living: Finding Inner Peace",
        name: "Emily Parker",
        duration: "8Hr 36M",
        category: "Health & Wellness",
        desc: "Ligula viverra consectetur velit interdum. Tempus aliquam senectus facilisis condimentum tortor libero maecenas arcu pellentesque.",
        cta: "Share This Episode"
    }
]

export default function Cards() {
    return (
        <div className={style.root}>
            {
                data.map(({ img, episode, title, name, duration, category, desc, cta }, i) => (
                    <div key={i} className={style.slides}>
                        <div className={style.imgBox}>
                            <Image src={img} alt="domain" />
                            <div className={style.episode}>
                                <div className={style.icon}>
                                    <Image src={Play} alt="domain" />
                                </div>
                                <span className={style.number}>{episode}</span>
                            </div>
                        </div>
                        <h3 className={style.title}>{title}</h3>
                        <div className={style.details}>
                            <div className={style.col}>
                                <Image src={Mic} alt="domain" />
                                <span className={style.name}>{name}</span>
                            </div>
                            <div className={style.col}>
                                <Image src={Clock} alt="domain" />
                                <span className={style.name}>{duration}</span>
                            </div>
                            <div className={style.col}>
                                <Image src={Folder} alt="domain" />
                                <span className={style.name}>{category}</span>
                            </div>
                        </div>
                        <p className={style.para}>{desc}</p>
                        <Link href="/" className={style.cta}>
                            {cta}
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}
