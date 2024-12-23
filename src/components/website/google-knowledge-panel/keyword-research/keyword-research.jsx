// Next
import Image from "next/image"
// Media
import Keywords from "media/google-knowledge-panel/keywords.png"
// Css
import styles from "./keyword-research.module.css"
export default function KeywordResearch() {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div className={styles.content}>
                        <h2 className={styles.title}>Still in doubt about whether you need a keyword research service?</h2>
                    </div>
                    <Image src={Keywords} alt="domain"/>
                </div>
            </div>
        </section>
    )
}