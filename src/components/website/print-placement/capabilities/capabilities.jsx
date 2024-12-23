// Next
import Image from "next/image";
// Components
import { CTAGroupLight } from "@/components";
// Media
import Screen from "media/print-placement/screen.png"
// Css
import styles from "./capabilities.module.css"
export default function Capabilities() {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div className={styles.__grid}>
                        <div>
                            <Image src={Screen} alt="domain" className="mx-auto" />
                        </div>
                        <div className={styles.content}>
                            <h2 className={styles.title}>Book Marketing Magazine Layout Design Capabilities</h2>
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