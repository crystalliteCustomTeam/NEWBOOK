// Next
import Image from "next/image"
// Css
import styles from "./templates.module.css"
// Media
import Template from "media/email-newsletter/templates.png"
// Components
import { CTAGroupLight } from "@/components";

export default function Templates() {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div className={styles.__grid}>
                        <div className={styles.content}>
                            <h2 className={styles.title}>Ready to Stand Out with Your Newsletters?</h2>
                            <p className={styles.para}>Let us handle your content needs and help you connect with your audience!</p>
                            <div className={styles.cta}>
                                <CTAGroupLight />
                            </div>
                        </div>
                        <div>
                            <Image src={Template} alt="domain" className={styles.img} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}