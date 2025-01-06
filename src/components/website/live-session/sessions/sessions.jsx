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
              <h2 className={style.title}>Join Our Live Sessions</h2>
              <p className={style.para}>
                Signing up is easy! Drop down your contact details below, and
                we’ll get back to you with all the details on our upcoming
                sessions.
              </p>
              <ul className={style.lists}>
                {[
                  "Segments Chat",
                  "Breakout Rooms",
                  "Screen Sharing",
                  "Opinion Polls",
                ].map((e, i) => (
                  <li key={i} className={style.items}>
                    <Image src={Checkbox} alt="domain" />
                    {e}
                  </li>
                ))}
              </ul>
              <div className={style.cta}>
                <CTAGroupLight />
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
