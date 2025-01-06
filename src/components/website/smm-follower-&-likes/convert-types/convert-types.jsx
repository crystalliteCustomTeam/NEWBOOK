// Css
import { CTAGroupLight } from "@/components"
import style from "./convert-types.module.css"
// Next
import dynamic from "next/dynamic"
// Components
const Cards = dynamic(() => import("./cards/cards"))

export default function ConvertTypes() {
  return (
    <section>
      <div className={style.root}>
        <div className="container">
          <div className={style.content}>
            <h2 className={style.title}>Premium SMM Services We Offer </h2>
            <p className={style.para}>
              Book Marketing has everything your content requires to reach your
              audience. Here’s what we offer:
            </p>
          </div>
          <Cards />
          <div className={style.cta}>
            <CTAGroupLight />
          </div>
        </div>
      </div>
    </section>
  )
}
