// Css
import style from "./publishing.module.css"
// Next
import Image from "next/image"
// Media
import Checkbox from "media/home/checkbox-pink.svg"
import News from "media/news-article-publishing/news.png"
// Components
import { CTAGroupLight } from "@/components"

export default function Publishing() {
  return (
    <section>
      <div className={style.root}>
        <Image src={News} alt="domain" className={style.img} />
        <div className="container">
          <div className={style.grids}>
            <div className={style.cols}>
              <h2 className={style.title}>Efficient Article Writing Process</h2>
              <p className={style.para}>
                Publish all news articles directly from your CMS or directly
                into the Book Marketing creator. Free to read or blocked by any
                type of subscription or individual sales.
              </p>
              <ul className={style.lists}>
                {[
                  "Consultation & Project Outline",
                  "Drafting & Writing",
                  "Editing & Formatting",
                  "Final Approval & Publication",
                  "Marketing",
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
          </div>
        </div>
      </div>
    </section>
  )
}
