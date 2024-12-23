// Components
import Cards from "./cards/cards"
// Css
import style from "./trending-posts.module.css"

export default function TrendingPosts() {
    return (
        <section>
            <div className={style.root}>
                <div className="container">
                    <p className={style.subTitle}>Top Trending</p>
                    <h2 className={style.title}>Discover the Latest Trends in Social Media Post’s.</h2>
                    <Cards />
                </div>
            </div>
        </section>
    )
}