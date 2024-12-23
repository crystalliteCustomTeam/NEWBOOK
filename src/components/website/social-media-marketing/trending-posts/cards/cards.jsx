// Css
import style from "./cards.module.css"
// Media
import One from "media/social-media-marketing/trending-posts/1.png"
import Two from "media/social-media-marketing/trending-posts/2.png"
import Three from "media/social-media-marketing/trending-posts/3.png"
import Four from "media/social-media-marketing/trending-posts/4.png"
import Five from "media/social-media-marketing/trending-posts/5.png"
import Six from "media/social-media-marketing/trending-posts/6.png"
import Seven from "media/social-media-marketing/trending-posts/7.png"
import Eight from "media/social-media-marketing/trending-posts/8.png"
import Nine from "media/social-media-marketing/trending-posts/9.png"
// Next
import Image from "next/image"

const data = [
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine
]

export default function Cards() {
    return (
        <div className={style._grid}>
            {
                data.map((e, i) => (
                    <div key={i} className={style._cols}>
                        <Image src={e} alt="domain" />
                    </div>
                ))
            }
        </div>
    )
}