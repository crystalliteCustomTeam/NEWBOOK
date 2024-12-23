// Css
import style from "./cards.module.css"
// Next
import Image from "next/image"
// Media
import One from "media/search-engine-optimization/icons/1.png"
import Two from "media/search-engine-optimization/icons/2.png"
import Three from "media/search-engine-optimization/icons/3.png"
import Four from "media/search-engine-optimization/icons/4.png"
import Five from "media/search-engine-optimization/icons/5.png"
import Six from "media/search-engine-optimization/icons/6.png"

const data = [
    {
        img: One,
        title: "Enterprise SEO",
        para: "Does your business have thousands of web pages… or make millions of dollars in revenue? Our SEO company will help you optimize each page for organic search. And dominate your industry."
    },
    {
        img: Two,
        title: "Niche Research",
        para: "Good SEO comes from data – not guesswork. Before starting any project, our search engine optimization company will do extensive research to find out the best keywords and strategy for *your* niche."
    },
    {
        img: Three,
        title: "Link Building",
        para: "We’ll come up with a powerful link-building strategy that gets other high-quality sites to link to your content. So your website’s domain authority – and your ranking – go up."
    },
    {
        img: Four,
        title: "International SEO",
        para: "Wanna reach users in other countries? We’ll help you expand your reach – and optimize your site for different countries and languages."
    },
    {
        img: Five,
        title: "SEO Audit",
        para: "Get a detailed SEO analysis of your website. And find out what you need to do to take your ranking from “practically nonexistent” to the first page of Google."
    },
    {
        img: Six,
        title: "Google Penalty Recovery",
        para: "Has your website been hit with a Google penalty? Our SEO agency will figure out exactly what went wrong – and how to turn things around. ASAP."
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