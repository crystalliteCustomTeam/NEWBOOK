// Components
import Cards from "./cards/cards"
import { CTAGroupDark } from "@/components"
// Css
import style from "./trending-podcasts.module.css"

export default function TrendingPosts() {
    return (
        <section>
            <div className={style.root}>
                <div className="container">
                    <p className={style.subTitle}>Top Trending</p>
                    <h2 className={style.title}>Discover the Latest Trends in Cross Podcast.</h2>
                    <Cards />
                    <div className={style.cta}>
                        <CTAGroupDark />
                    </div>
                </div>
            </div>
        </section>
    )
}