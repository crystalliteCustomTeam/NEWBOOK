// Next
import Image from "next/image"
// Css
import style from "./hero.module.css"
// Media
import Bg from "media/live-session/hero-bg.png"
// Components
import { CTAGroupDark } from "@/components"

export default function Hero() {
  return (
    <>
      <section>
        <div className={style.root}>
          <Image src={Bg} alt="domain" fill priority className={style.bg} />
          <div className="container">
            <div>
              <h1 className={style.title}>
              Meet-and-Greet from the Convenience of Your Home
              </h1>
              <p className={style.para}>
              Nothing makes readers happier than connecting with their favorite authors. Book Marketing’s Live Session bridges the gap, designed for new authors expanding their reader community! 
              </p>
              <div className={style.cta}>
                <CTAGroupDark />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
