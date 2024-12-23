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
                            <h2 className={styles.title}>Create email newsletter designs that customers can’t wait to read.</h2>
                            <p className={styles.para}>Get started faster with gorgeous, pre-designed templates, ready to export straight to your marketing tool.</p>
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