// Next
import Image from "next/image";
// Components
import { CTAGroupLight } from "@/components";
// Media
import DeliveryModel from "media/amazon-optimization/deliveryModel.png"
// CSs
import styles from "./maximum-benefit.module.css"

export default function MaximumBenefit() {
    return (
        <section>
            <div>
                <div className="container">
                    <div className={styles.__grid}>
                        <div className={styles.leftColumn}>
                            <Image src={DeliveryModel} alt="domain" className={styles.img} />
                        </div>
                        <div className={styles.content}>
                            <h2 className={styles.title}>Streamline your operations for maximum benefit.</h2>
                            <p className={styles.para}>At Book Marketing, we enhance your operational efficiency to drive sales growth. Whether you operate with FBA, FBM, or PL, our Amazon seller specialists manage listings, orders, product sourcing, and inventory. With state-of-the-art automation tools, your store operates seamlessly round the clock, ensuring continuous performance.</p>
                            <div className={styles.cta}>
                                <CTAGroupLight />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}