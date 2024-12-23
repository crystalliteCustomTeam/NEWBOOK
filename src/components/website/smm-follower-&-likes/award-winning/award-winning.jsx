// Next
import Image from "next/image";
// Media
import Visitor from "media/smm-follower-&-likes/visitor.png"
import Boost from "media/smm-follower-&-likes/boost.png"
// Css
import styles from "./award-winning.module.css"
export default function AwardWinning() {
    return (
        <section>
            <div>
                <div className="container">
                    <div className={styles.content}>
                        <span className={styles.about}>They already love our services 😍</span>
                        <h2 className={styles.title}>Award-Winning Social Media Management Company</h2>
                    </div>
                    <div className={styles.__grid}>
                        <div className={styles.leftColumn}>
                            <Image src={Visitor} alt="domain" />
                        </div>
                        <div className={styles.rightColumn}>
                            <Image src={Boost} alt="domain" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}