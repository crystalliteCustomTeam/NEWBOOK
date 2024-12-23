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
                            <h2 className={styles.title}>Online Reputation Management Solutions!</h2>
                            <p className={styles.para}>Our Online Reputation Management Service is comprehensive, covering all aspects of digital presence. We don’t just stop at monitoring and creating content. We also provide ongoing support, content removal, and strategy, helping you navigate the ever-changing digital landscape. Our team stays on top of trends and adapts strategies to ensure that your online reputation remains strong and positive, reflecting the dynamic nature of the internet.</p>
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