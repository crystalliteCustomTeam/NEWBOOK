// Next
import Link from "next/link"
import Image from "next/image"
// Media
import Facebook from "media/footer/icons/1.png"
import Linkedin from "media/footer/icons/2.png"
import Youtube from "media/footer/icons/3.png"
// Css
import styles from "./copyright.module.css"

export default function Copyright() {
    return (
        <div className={styles.__root}>
            <div className="container">
                <div className={styles.__bottomBar}>
                    <span className={styles.copyright}>© 2024 Book Marketing All Rights Reserved.</span>
                    <div className={styles.__grid}>
                        {
                            [
                                ["/", "Privacy policy", true],
                                ["/", "Security", true],
                                ["/", "Terms of service", false],
                            ].map(([link, text, pipeline]) => (
                                <div key={text}>
                                    <Link href={link}>{text}</Link>
                                    {
                                        pipeline && <span>|</span>
                                    }
                                </div>
                            ))
                        }
                    </div>
                    <div className={styles.__grid2}>
                        {
                            [
                                ["https://www.facebook.com/", Facebook],
                                ["https://www.linkedin.com/", Linkedin],
                                ["https://www.youtube.com/", Youtube],
                            ].map(([link, icon]) => (
                                <Link key={link} href={link} target="_blank" className={styles.__smmIcons}>
                                    <Image src={icon} alt="icons" />
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}