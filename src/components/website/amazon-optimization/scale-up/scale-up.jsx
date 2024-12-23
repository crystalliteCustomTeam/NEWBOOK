// Components
import { CTAGroupLight } from "@/components"
import Cards from "./cards/cards"
// Css
import styles from "./scale-up.module.css"

export default function ScaleUp() {
    return (
        <div className="bg-[#F2F5F7] lg:pt-[100px] lg:pb-[40px] py-[40px]">
            <div className="container">
                <div className="grid lg:grid-cols-2 grid-cols-1 items-center lg:gap-x-5 gap-y-10">
                    <div className={styles.content}>
                        <h2 className={styles.title}>Scale up with our amazon automation business service!</h2>
                        <p className={styles.para}>The best way for Amazon sellers to simplify and optimize their business operations, Improve efficiency and maximize profits is to partner with Book Marketing. Take the hassle out of managing your Amazon store. We handle the everyday tasks so you can focus on growing your business.</p>
                        <div className={styles.cta}>
                            <CTAGroupLight />
                        </div>
                    </div>
                    <Cards />
                </div>
            </div>
        </div>
    )
}
