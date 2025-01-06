// Next
import Image from "next/image"
// Media
import Models from "media/smm-follower-&-likes/models.png"
// Css
import styles from "./save-time.module.css"
export default function SaveTime() {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div className={styles.content}>
                        <h2 className={styles.title}>Time-Savy Social Media Services</h2>
                    </div>
                    <Image src={Models} alt="domain" />
                </div>
            </div>
        </section>
    )
}