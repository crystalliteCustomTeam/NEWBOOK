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
                        <h2 className={styles.title}>What we do!</h2>
                        <MobileRender>
                            <p className={styles.para}>Writing a book alone isn’t enough; it needs the right marketing strategies to reach its full potential. At Book Marketing, we offer a plethora of services, allowing you to choose the marketing strategy that fits your criteria and budget. </p>
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