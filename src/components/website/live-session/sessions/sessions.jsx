// Next
import Image from "next/image"
// Media
import Screens from "media/live-session/session2.png"
import Checkbox from "media/home/checkbox-pink.svg"
// Css
import style from "./sessions.module.css"
// Components
import { CTA, CTAGroupLight } from "@/components"

export default function Sessions() {
    return (
        <section>
            <div className={style.root}>
                <div className="container">
                    <div className={style._flex}>
                        <div className={style.left}>
                            <h2 className={style.title}>Live Session</h2>
                            <p className={style.para}>LiveSession helps product teams analyze users’ behavior, improve UX, find bugs, and increase conversion rates using session replays, and event-based product analytics.</p>
                            <ul className={style.lists}>
                                {
                                    ["Segments Chat", "Breakout Rooms", "Screen Sharing", "Opinion Polls"].map((e, i) => (
                                        <li key={i} className={style.items}>
                                            <Image src={Checkbox} alt="domain" />
                                            {e}
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className={style.cta}>
                                <CTAGroupLight/>
                            </div>
                        </div>
                        <div className="lg:basis-[55%] basis-[100%]">
                            <Image src={Screens} alt="domain" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}