// Css
import style from "./publishing.module.css"
// Next
import Image from "next/image"
// Media
import Billboard1 from "media/billboard/billboard1.png"
import Billboard2 from "media/billboard/billboard2.png"
// Components
import { CTAGroupLight } from "@/components"

export default function Publishing() {
  return (
    <section>
      <div className={style.root}>
        <Image src={Billboard2} alt="domain" className={style.img} />
        <div className="container">
          <div className={style.grids}>
            <div className={style.cols}>
              <h2 className={style.title}>Why Billboard Marketing?</h2>
              <p className={style.para}>
                Billboards provide unmatched visibility and engage diverse
                audiences effectively. From creative design to strategic
                placement, our campaigns build brand recognition and drive
                growth.
              </p>
              <ul className={style.lists}>
                {[
                  "Massive exposure to put your message in front of thousands of people every day, giving visibility.",
                  "Massive exposure to put your message in front of thousands of people every day, giving visibility.",
                  "Memorable visuals to make a lasting impression in a crowded space.",
                  "Smart location choices to place your ad in high-traffic areas, targeting the right audience at the right time.",
                  "Well-executed billboard campaigns build trust, spark interest, and lead to increased sales or recognition.",
                ].map((e, i) => (
                  <li key={i} className={style.items}>
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={style.root}>
        <Image src={Billboard1} alt="domain" className={style.img2} />
        <div className="container">
          <div className={style.grids2}>
            <div className={style.cols2}>
              <h2 className={style.title}>How Book Marketing can help.</h2>
              <p className={style.para2}>
              At Book Marketing, we specialize in helping companies advertise in Times Square, reaching America’s most desirable and hard-to-reach audiences. With our expertise, we guide you through the process, from choosing the best locations and formats to crafting catchy messages for Times Square's dynamic crowds. Using our strategic insights and media relationships, we ensure your brand stands out and resonates with the millions of viewers who pass through daily.</p>
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
