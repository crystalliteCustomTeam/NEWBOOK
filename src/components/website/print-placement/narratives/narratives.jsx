// Next
import Image from "next/image";
// Media
import Banner from "media/print-placement/banner.png"
// Components
import { CTAGroupLight } from "@/components";
// Css
import styles from "./narratives.module.css"
export default function Narratives() {
    return (
        <section>
            <div className={styles.root}>
                <Image src={Banner} alt="domain" className={styles.img} />
                <div className="container">
                    <div className={styles.content}>
                        <h2 className={styles.title}>The Art of Print: Crafting Visual Narratives</h2>
                        <div className={styles.cta}>
                            <CTAGroupLight />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}