// Next
import Image from "next/image";
// Components
import { CTAGroupLight } from "@/components";
// Media
import Followers from "media/smm-follower-&-likes/followers.png"
// Css
import styles from "./focused-agency.module.css"
export default function FocusedAgency() {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div className={styles.__grid}>
                        <div>
                            <Image src={Followers} alt="domain" className="mx-auto" />
                        </div>
                        <div className={styles.content}>
                            <h2 className={styles.title}>We Are a 100% Social Focused Agency</h2>
                            <p className={styles.para}>For over a decade, our trail-blazing spirit has set the standard around the globe, delivering top-tier results that speak for themselves. When social media adapts, we adapt with it. Our passionate team thrives on creativity and is consistently ready to conquer the next challenge with data-driven campaigns that mesmerize your audience, ignite lead generation, and amplify your brand’s presence. Ready to make an impact with us?</p>
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