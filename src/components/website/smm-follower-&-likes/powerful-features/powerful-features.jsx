// Next
import Image from "next/image";
// Components
import { CTAGroupLight } from "@/components";
// Media
import Likes from "media/smm-follower-&-likes/likes.png"
// Css
import styles from "./powerful-features.module.css"
export default function PowerfulFeatures() {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div className={styles.__grid}>
                        <div>
                            <Image src={Likes} alt="domain" className="mx-auto" />
                        </div>
                        <div className={styles.content}>
                            <h2 className={styles.title}>One easy-to-use solution, loaded with powerful features.</h2>
                            <p className={styles.para}>Everything you need to dominate social media—fortified with the industry’s #1 rated customer support.</p>
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