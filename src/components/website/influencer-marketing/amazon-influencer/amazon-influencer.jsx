// Css
import style from "./amazon-influencer.module.css"
// Next
import Image from "next/image"
// Media
import Checkbox from "media/home/checkbox-pink.svg"
import Marketings from "media/influencer-marketing/marketings.png"
// Components
import { CTAGroupLight } from "@/components"
export default function AmazonInfluencer() {
    return (
        <section>
            <div className={style.root}>
                <div className="container">
                    <div className={style.__grid}>
                        <div>
                            <Image src={Marketings} alt="domain" />
                        </div>
                        <div>
                            <h2 className={style.title}>Drive ROI with Influencer Marketing on Amazon.</h2>
                            <ul className={style.lists}>
                                {
                                    ["Simplify your affiliate campaigns", "Stand out in a crowded market", "Structure motivating rewards for creators"].map((e, i) => (
                                        <li key={i} className={style.items}>
                                            <Image src={Checkbox} alt="domain" />
                                            {e}
                                        </li>
                                    ))
                                }
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