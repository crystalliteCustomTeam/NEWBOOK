// Next
import dynamic from "next/dynamic"
// Components
const Slider = dynamic(() => import('./slider/slider'))
import { MobileRender } from "@/components"
// Css
import style from "./awards.module.css"

export default function Awards() {
    return (
        <section>
            <div className={style.root}>
                <MobileRender>
                    <div className={style.content}>
                        <h2 className={style.title}>
                            Our Reputation Toward  <br className="hidden lg:block" /> Noteworthy Book  <br className="hidden lg:block" /> Marketing, Affirmed <br className="hidden lg:block" /> Through Awards
                        </h2>
                        <p className={style.para}>
                            At Book Marketing, our accomplishments speak of why we’re the best in service!
                        </p>
                    </div>
                </MobileRender>
                <Slider />
            </div>
        </section>
    )
}
