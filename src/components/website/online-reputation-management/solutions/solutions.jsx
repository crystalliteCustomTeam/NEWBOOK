// Components
import { CTAGroupLight } from "@/components";
import Cards from "./cards/cards";
// Css
import styles from "./solutions.module.css"
export default function Solutions() {
    return (
        <section>
            <div className="bg-[#F2F5F7] lg:pt-[100px] lg:pb-[40px] py-[40px]">
                <div className="container">
                    <div className="grid lg:grid-cols-2 grid-cols-1 items-center lg:gap-x-5 gap-y-10">
                        <div className={styles.content}>
                            <h2 className={styles.title}>What Book Marketing’s ORM Services Outline</h2>
                            <p className={styles.para}>Our Online Reputation Management Service covers all aspects of your digital presence, including monitoring, content creation, support, and strategy. We adapt to trends to ensure your online reputation remains strong and positive.</p>
                            <div className={styles.cta}>
                                <CTAGroupLight />
                            </div>
                        </div>
                        <Cards/>
                    </div>
                </div>
            </div>
        </section>
    )
}