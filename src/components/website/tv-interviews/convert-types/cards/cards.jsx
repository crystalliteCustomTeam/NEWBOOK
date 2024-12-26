// Css
import style from "./cards.module.css"
// Next
import Image from "next/image"
// Media
import One from "media/tv-interviews/icons/1.png"
import Two from "media/tv-interviews/icons/2.png"
import Three from "media/tv-interviews/icons/3.png"
import Four from "media/tv-interviews/icons/4.png"
import Five from "media/tv-interviews/icons/5.png"
import Six from "media/tv-interviews/icons/6.png"

const data = [
    {
        img: One,
        title: "Creating a plan",
        para: "From your goals to the essential messages, our team personalizes a strategy for you. "
    },
    {
        img: Two,
        title: "Coaching",
        para: "Our TV crew provides personalized coaching to improve your on-camera presence, including body language and tone."
    },
    {
        img: Three,
        title: "Script Development",
        para: "We combine your mission with our vision to create a script that effectively conveys your brand to viewers. "
    },
    {
        img: Four,
        title: "Mock Interviews",
        para: "Our mock interviews ensure work delivery, brand confidence, and answers are perfected before execution. "
    },
    {
        img: Five,
        title: "Execution",
        para: "Remove harmful content and information that has the potential to damage your hard-earned online reputation."
    },
    {
        img: Six,
        title: "Post-Interview Promotion",
        para: "After the interview, we amplify your reach by sharing it across targeted digital channels, maximizing exposure and ensuring lasting impact."
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