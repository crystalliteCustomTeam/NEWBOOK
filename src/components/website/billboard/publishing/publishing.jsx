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
              <h2 className={style.title}>
                Digital billboards have revolutionized the industry with
                cutting-edge technology.
              </h2>
              <p className={style.para}>
                Times Square advertising and its digital billboards are
                accessible to companies of all sizes.
              </p>
              <ul className={style.lists}>
                {[
                  "174 Million People enter the Times Square Bowtie annually.",
                  "Approximately 330,000 pass through Times Square Daily (View Source)",
                  "53% of Residents are considered high-income, educated young professionals who are mobile and progressively early adopters with cutting-edge retail preferences.",
                  "47% of visitors continue to share on social media after they visit Times Square.",
                  "The Times Square crowd is a late-night crowd: over 85,000 pedestrians enter the Bowtie from 7pm-1am",
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
              At Book Marketing, We specialize in helping companies advertise in Times Square, effectively reaching America’s most desirable and hard-to-reach audiences. With our extensive expertise and industry knowledge, we guide you through the entire process, from selecting the optimal locations and formats for maximum impact to crafting compelling messages tailored to the diverse and dynamic crowds of Times Square.
              </p>
              <p className={style.para2}>
              By leveraging our strategic insights and established relationships with media owners, we ensure that your brand not only stands out amidst the bustling environment but also resonates deeply with the millions of viewers who pass through this iconic location daily.
              </p>
              <div className={style.cta}>
                <CTAGroupLight/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
