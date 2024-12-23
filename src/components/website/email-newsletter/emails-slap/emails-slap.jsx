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
                            <h2 className={styles.title}>Make sure your emails *slap*</h2>
                            <p className={styles.para}>With Book Marketing, you can always be confident your design will look great. Preview email templates in all their glory. Share them with colleagues via link, email & socials. Test until they're perfect across all platforms and devices.</p>
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