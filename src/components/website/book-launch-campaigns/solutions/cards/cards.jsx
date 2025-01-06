// Css
import style from "./cards.module.css"
// Next
import Image from "next/image"
// Media
import One from "media/amazon-optimization/icons/7.png"
import Two from "media/amazon-optimization/icons/8.png"
import Three from "media/amazon-optimization/icons/9.png"
import Four from "media/amazon-optimization/icons/10.png"

const data = [
    {
        img: One,
        title: "Influencer outreach and reviews.",
        para: "Generate early buzz by collaborating with genre-specific influencers and bloggers, sending them advanced copies for review and distribution on social media, websites, or podcasts. Create an ARC team to leave reviews on platforms like Amazon and Goodreads, boosting trust and searchability. "
    },
    {
        img: Two,
        title: "Email marketing campaigns.",
        para: "Categorize your email list by reader preferences to send tailored content, teasers, and updates leading to the launch. Attract subscribers with a free chapter or behind-the-scenes details. Send a countdown sequence leading up to the debut and post-launch emails with incentives, discounts, and exclusive content to keep readers engaged"
    },
    {
        img: Three,
        title: "Online Launch ",
        para: "Host a virtual event with a reading session, Q&A, and giveaway to make the launch more participatory. Use platforms like Zoom or social media to reach a broader audience. Offer incentives like signed copies, exclusive items, or extra content, and record the event for wider appeal and future viewership. "
    },
    {
        img: Four,
        title: "Social Media Campaign Countdown",
        para: "Create a social media countdown with daily or weekly content to build excitement, like sharing quotes, character bios, or plot points. Use multimedia like short videos, animated trailers, and behind-the-scenes looks at the writing process. Partnering with book-themed accounts can boost visibility and engagement. "
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