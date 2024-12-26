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
                            <h2 className={styles.title}>From Clicks to Conversions: Make the Most of Amazon Marketing with Book Marketing Today</h2>
                            <p className={styles.para}>Optimize the art of Amazon Marketing by signing up our services.</p>
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