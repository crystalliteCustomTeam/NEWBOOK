// Next
import Image from "next/image";
// Components
import { CTAGroupLight } from "@/components";
// Css
import styles from "./one-roof.module.css"
// Media
import Units from "media/influencer-marketing/phone.png"
export default function OneRoof() {
    return (
        <section>
            <div className={styles.root}>
                <Image src={Units} alt="domain" className={styles.img} />
                <div className="container">
                    <div className={styles.__grid}>
                        <div className={styles.column}>
                            <h2 className={styles.title}>Influence that’s always-on! Everything Social, Under One Roof</h2>
                            <p className={styles.para}>Creators are the world’s new media. With over 200M+ professional creators, finding the right talent for your campaign is like finding a needle in a sea of haystacks. Viral Nation’s end-to-end influencer marketing team simplifies this process by curating the perfect creators for your brand across global markets.</p>
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
