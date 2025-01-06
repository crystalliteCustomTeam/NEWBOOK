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
                            <h2 className={styles.title}>Get Started with Our ORM Services</h2>
                            <p className={styles.para}>Don’t leave your online reputation unguarded. Join our ORM services and take proactive steps to ensure a positive digital footprint for your business or writing career!</p>
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