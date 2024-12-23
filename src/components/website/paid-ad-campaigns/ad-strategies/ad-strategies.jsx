// Next
import Image from "next/image";
// Components
import { CTAGroupLight } from "@/components";
// Css
import styles from "./ad-strategies.module.css"
// Media
import Ads from "media/paid-ad-campaigns/ads.png"
export default function AdStrategies() {
    return (
        <section>
            <div className={styles.root}>
                <Image src={Ads} alt="domain" className={styles.img} />
                <div className="container">
                    <div className={styles.__grid}>
                        <div className={styles.column}>
                            <h2 className={styles.title}>Stop Losing Your Ad Budget on the Wrong Audience and Ineffective Ad Strategies.</h2>
                            <p className={styles.para}>At Book Marketing, we create ads that  work with Meta’s new interest graph and AI-powered targeting, ensuring  your content reaches the right audience every time. By leveraging  advanced data insights and creative strategies, our certified Meta and  Google media buyers can help you achieve higher conversion rates and  consistent 3-6x ROAS.</p>
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