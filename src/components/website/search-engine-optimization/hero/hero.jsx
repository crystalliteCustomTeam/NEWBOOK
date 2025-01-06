// Next
import Image from "next/image"
// Css
import style from "./hero.module.css"
// Media
import Bg from "media/search-engine-optimization/hero-bg.png"
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
                SEO Services for New Businesses and Authors
              </h1>
              <p className={style.para}>
                Book Marketing offers SEO services to fit your needs, boosting
                your online presence and making it perfect for emerging business
                authors alike!
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
