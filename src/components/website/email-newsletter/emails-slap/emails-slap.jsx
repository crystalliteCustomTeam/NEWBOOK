// Next
import Image from "next/image"
// Css
import styles from "./emails-slap.module.css"
// Media
import Preview from "media/email-newsletter/preview.png"
// Components
import { CTAGroupLight } from "@/components"
export default function EmailsSlap() {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div className={styles.__grid}>
                        <div>
                            <h2 className={styles.title}>Our Approach to Newsletter Success</h2>
                            <p className={styles.para}>Clear the next steps for your readers.</p>
                            <div className={styles.cta}>
                                <CTAGroupLight />
                            </div>
                        </div>
                        <Image src={Preview} alt="domain" className={styles.img} />
                    </div>
                </div>
            </div>
        </section>
    )
}