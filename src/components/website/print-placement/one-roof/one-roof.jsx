// Next
import Image from "next/image";
// Components
import { CTAGroupLight } from "@/components";
// Css
import styles from "./one-roof.module.css"
// Media
import Book from "media/print-placement/book.png"
export default function OneRoof() {
    return (
        <section>
            <div className={styles.root}>
                <div className="container relative z-10 overflow-x-clip lg:pb-[270px] md:pb-[80px] pb-[60px]">
                <Image src={Book} alt="domain" className={styles.img} />
                    <div className={styles.__grid}>
                        <div className={styles.column}>
                            <h2 className={styles.title}>Print Placement (Magazine) that’s always-on! Everything Social, Under One Roof</h2>
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
