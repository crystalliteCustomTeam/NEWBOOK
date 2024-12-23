// Next
import Image from "next/image";
// Components
import { CTAGroupLight } from "@/components";
// Media
import Phone from "media/online-reputation-management/frame.png"
// Css
import styles from "./advanced-managment.module.css"

export default function AdvancedManagment() {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div className={styles.__grid}>
                        <Image src={Phone} alt="domain" />
                        <div className={styles.content}>
                            <h2 className={styles.title}>We help you take control of your online reputation with advanced online reputation management services.</h2>
                            <p className={styles.para}>Remove, suppress, repair, and monitor your online reputation with the reputation experts.</p>
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