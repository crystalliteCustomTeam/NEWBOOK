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
            Don’t miss this opportunity to grow as an author. Join our Live Sessions and take the next step toward achieving your writing goals!
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
