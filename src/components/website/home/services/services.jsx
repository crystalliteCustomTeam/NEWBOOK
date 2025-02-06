// Next
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"
// Media
import ChevronRight from "media/icons/right-chevron-pink.svg"
// Components
const Cards = dynamic(() => import("./cards/cards"))
import { MobileRender } from "@/components"
// Css
import styles from "./services.module.css"

export default function Services() {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div className={styles.content}>
                        <h2 className={styles.title}>Marketing Services That Serve Your Book Best </h2>
                        <MobileRender>
                            <p className={styles.para}>From targeted promotions to global outreach, our expert book marketing services are designed to boost visibility, drive sales, and connect your book with the right audience. </p>
                            <Link className={styles.link} href="/">
                                <span>Explore</span>
                                <Image src={ChevronRight} alt="domain" />
                            </Link>
                        </MobileRender>
                    </div>
                    <Cards />
                </div>
            </div>
        </section>
    )
}