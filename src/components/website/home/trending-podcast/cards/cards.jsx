// Components
import { AutoPlaySlider } from "@/components"
// Media
import One from "media/home/trending-podcast/1.png"
import Two from "media/home/trending-podcast/2.png"
import Three from "media/home/trending-podcast/3.png"
import Four from "media/home/trending-podcast/4.png"
import Five from "media/home/trending-podcast/5.png"
import Six from "media/home/trending-podcast/6.png"
// Next
import Image from "next/image"
import Link from "next/link"
// Css
import style from "./cards.module.css"

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
        <AutoPlaySlider arrows={false}>
            {
                data.map(({ img, episode, title, name, duration, category, desc, cta }) => (
                    <div key={episode} className={style.slides}>
                        <div className={style.imgBox}>
                            <Image src={img} alt="domain" />
                            <div className={style.episode}>
                                <div className={style.icon}>
                                    <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.9258 7.14746L0.925782 14.0757L0.925782 0.219257L12.9258 7.14746Z" fill="white" />
                                    </svg>
                                </div>
                                <span className={style.number}>{episode}</span>
                            </div>
                        </div>
                        <h3 className={style.title}>{title}</h3>
                        <div className={style.details}>
                            <div className={style.col}>
                                <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.92578 2.39746C8.32904 2.39746 7.75675 2.63451 7.33479 3.05647C6.91283 3.47843 6.67578 4.05072 6.67578 4.64746V10.6475C6.67578 11.2442 6.91283 11.8165 7.33479 12.2385C7.75675 12.6604 8.32904 12.8975 8.92578 12.8975C9.52252 12.8975 10.0948 12.6604 10.5168 12.2385C10.9387 11.8165 11.1758 11.2442 11.1758 10.6475V4.64746C11.1758 4.05072 10.9387 3.47843 10.5168 3.05647C10.0948 2.63451 9.52252 2.39746 8.92578 2.39746Z" stroke="#F32FA4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14.1758 9.14746V10.6475C14.1758 12.0398 13.6227 13.3752 12.6381 14.3598C11.6535 15.3443 10.3182 15.8975 8.92578 15.8975C7.53339 15.8975 6.19804 15.3443 5.21347 14.3598C4.2289 13.3752 3.67578 12.0398 3.67578 10.6475V9.14746" stroke="#F32FA4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8.92578 15.8975V18.8975" stroke="#F32FA4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5.92578 18.8975H11.9258" stroke="#F32FA4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className={style.name}>{name}</span>
                            </div>
                            <div className={style.col}>
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_273_1207)">
                                        <path d="M10.9259 18.9809C15.5282 18.9809 19.2592 15.2499 19.2592 10.6475C19.2592 6.04517 15.5282 2.31421 10.9259 2.31421C6.32349 2.31421 2.59253 6.04517 2.59253 10.6475C2.59253 15.2499 6.32349 18.9809 10.9259 18.9809Z" stroke="#F32FA4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10.9258 5.64746V10.6475L14.2591 12.3141" stroke="#F32FA4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_273_1207">
                                            <rect width="20" height="20" fill="white" transform="translate(0.925781 0.647461)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span className={style.name}>{duration}</span>
                            </div>
                            <div className={style.col}>
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_273_1212)">
                                        <path d="M19.2592 16.4808C19.2592 16.9228 19.0836 17.3467 18.771 17.6593C18.4585 17.9719 18.0346 18.1475 17.5925 18.1475H4.2592C3.81717 18.1475 3.39325 17.9719 3.08068 17.6593C2.76812 17.3467 2.59253 16.9228 2.59253 16.4808V4.81413C2.59253 4.3721 2.76812 3.94818 3.08068 3.63562C3.39325 3.32306 3.81717 3.14746 4.2592 3.14746H8.42586L10.0925 5.64746H17.5925C18.0346 5.64746 18.4585 5.82306 18.771 6.13562C19.0836 6.44818 19.2592 6.8721 19.2592 7.31413V16.4808Z" stroke="#F32FA4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_273_1212">
                                            <rect width="20" height="20" fill="white" transform="translate(0.925781 0.647461)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span className={style.name}>{category}</span>
                            </div>
                        </div>
                        <p className={style.para}>{desc}</p>
                        <Link href="/podcasts" className={style.cta}>
                            {cta}
                        </Link>
                    </div>
                ))
            }
        </AutoPlaySlider>
    )
}
