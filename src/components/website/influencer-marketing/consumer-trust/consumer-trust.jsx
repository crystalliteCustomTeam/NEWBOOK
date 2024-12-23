// Next
import Image from "next/image";
// Components
import { CTAGroupLight } from "@/components";
// Css
import styles from "./consumer-trust.module.css"
// Media
import Screens from "media/influencer-marketing/screens.png"
export default function ConsumerTrust() {
    return (
        <section>
        <div className={styles.root}>
            <Image src={Screens} alt="domain" className={styles.img} />
            <div className="container">
                <div className={styles.__grid}>
                    <div className="col-span-6"></div>
                    <div className={styles.column}>
                        <h2 className={styles.title}>Behind every consumer is a creator they trust!</h2>
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