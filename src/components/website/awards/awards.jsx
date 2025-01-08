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
                        Awards That Spotlight <br className="lg:block hidden" /> Our Book Marketing <br className="lg:block hidden" />  Expertise  
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
