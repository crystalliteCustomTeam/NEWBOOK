// Next
import Image from "next/image"
// Media
import Stars from "media/online-reputation-management/icons/1.png"
// Css
import style from "./cards.module.css"
// Component
import { AutoScrollSlider } from "@/components"
import data from "./data.json"

export default function Cards() {
  return (
    <div>
      {data.map((item, i) => (
        <div key={i}>
          {item.items && (
            <AutoScrollSlider key={i} direction={item.direction} align="center">
              {item.items.map(({ avater, bg, title, para, name, about }, i) => (
                <div key={i} className={style.slides}>
                  <div className={style.cards}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <Image
                          src={avater}
                          alt="domain"
                          width={40}
                          height={40}
                          className={`${bg} rounded-full`}
                        />
                        <h3
                          className={style.title}
                          dangerouslySetInnerHTML={{ __html: title }}
                        />
                      </div>
                      <Image src={Stars} alt="domain" width={80} height={20} />
                    </div>
                    <p className={style.para}>{para}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="block font-bold font-manrope sm:text-base text-sm leading-tight">
                        {name}
                      </span>
                      <span className="block font-normal text-[#6B6B78] text-sm leading-tight">
                        {about}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </AutoScrollSlider>
          )}
        </div>
      ))}
    </div>
  )
}
