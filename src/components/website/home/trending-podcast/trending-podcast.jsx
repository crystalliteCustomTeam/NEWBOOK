// Next
import dynamic from "next/dynamic"
// Components
const Cards = dynamic(() => import("./cards/cards"));
import { CTAGroupDark, MobileRender } from "@/components"
// Css
import style from "./trending-podcast.module.css"

export default function TrendingPodcast() {
    return (
        <section>
            <div className={style.root}>
                <MobileRender>
                    <svg className={style.micvector} width="149" height="377" viewBox="0 0 149 377" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.11222 249.792C39.7911 249.792 71.1192 218.464 71.1192 179.785V83.5253C71.1192 44.8464 39.7911 13.5183 1.11222 13.5183C-37.5666 13.5183 -68.8948 44.8464 -68.8948 83.5253V179.785C-68.8948 218.464 -37.5666 249.792 1.11222 249.792Z" stroke="white" strokeOpacity="0.06" strokeWidth="26.2526" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M-132.777 147.405V177.158C-132.777 251.015 -72.7457 311.046 1.11165 311.046C74.969 311.046 135 251.015 135 177.158V147.405" stroke="white" strokeOpacity="0.05" strokeWidth="26.2526" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M-23.2157 91.0534C-7.46412 85.2778 9.6876 85.2778 25.4392 91.0534" stroke="white" strokeOpacity="0.06" strokeWidth="26.2526" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M-12.8901 128.156C-3.61421 125.706 6.01176 125.706 15.2877 128.156" stroke="white" strokeOpacity="0.06" strokeWidth="26.2526" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M1.11194 311.048V363.553" stroke="white" strokeOpacity="0.06" strokeWidth="26.2526" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </MobileRender>
                <div className={`container ${style.left}`}>
                    <div className={style.content}>
                        <h2 className={style.title}>No #1 Podcast Charts with Book Marketing</h2>
                        <MobileRender>
                            <p className={style.para}>Podcasts offer an easy yet impactful way of connecting with relevant audiences in your field. With Book Marketing’s Podcast services, your book stays in the limelight of bestsellers, what’s new and trending, and relevant hot topics through genuine and engaging discussions by industry professionals.</p>
                            <div className={style.cta}>
                                <CTAGroupDark />
                            </div>
                        </MobileRender>
                    </div>
                </div>
                <div className={style.slider}>
                    <Cards />
                </div>
            </div>
        </section>
    )
}