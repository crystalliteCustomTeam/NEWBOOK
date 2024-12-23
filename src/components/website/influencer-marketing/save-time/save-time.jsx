// Next
import Image from "next/image"
// Media
import Models from "media/influencer-marketing/models.png"
// Css
import styles from "./save-time.module.css"
export default function SaveTime() {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div className={styles.content}>
                        <h2 className={styles.title}>Save time on Influencer Management</h2>
                    </div>
                    <Image src={Models} alt="domain" />
                </div>
            </div>
        </section>
    )
}