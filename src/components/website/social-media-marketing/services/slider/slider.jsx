// Components
import { AutoScrollSlider } from "@/components"
// Css
import style from "./slider.module.css"
// Json
import data from "./data.json"

export default function Slider() {
    return (
        <div className={style.root}>
            <AutoScrollSlider wrapperCss="overflow-visible" emblaWrapper="flex pt-[50px] lg:pt-[120px] lg:pb-[180px] [margin-left:calc(1.25rem_*_-1)]" >
                {
                    data.map(({ title, para, cta, ctaLink }, i) => (
                        <div key={i} className={style.slides}>
                            <div className={`${style.cards} group`}>
                                <h3 className={`${style.title} group-hover:text-white`}
                                    dangerouslySetInnerHTML={{ __html: title }}
                                />
                                <p className={`${style.para} group-hover:text-white`}>
                                    {para}
                                </p>
                                <div className={style.cta}
                                    dangerouslySetInnerHTML={{
                                        __html: `<a href=${ctaLink}>
                                ${cta}
                                <img src="/icons/right-chevron.svg" width="8" height="13" alt="domain" />
                            </a>` }}
                                />
                            </div>
                        </div>
                    ))
                }
            </AutoScrollSlider>
        </div>
    )
}