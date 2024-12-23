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
            <h2 className={style.title}>
              Live Session - What Book Marketing Guarantees!
            </h2>
            <p className={style.para}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
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
