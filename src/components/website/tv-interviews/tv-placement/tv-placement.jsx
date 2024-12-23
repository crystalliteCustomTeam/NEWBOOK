// Next
import dynamic from "next/dynamic";
// Components
import { CTAGroupLight } from "@/components";
const Video = dynamic(() => import("./video/video"));
// Css
import styles from "./tv-placement.module.css"
// Media
import Icon from "media/tv-interviews/icons/videoIcon.png"
import Image from "next/image";
export default function TvPlacement() {
    return (
        <section>
            <div className={styles.root}>
                <Image src={Icon} alt="domain" className={styles.img} />
                <div className="container">
                    <div className={styles.__grid}>
                        <div>
                            <Video />
                        </div>
                        <div>
                            <div>
                                <h2 className={styles.title}>What Can TV Placement Do For You?</h2>
                                <p className={styles.para}>Get booked on major TV networks for news stories and positive media coverage that will get you the right attention you need.</p>
                                <div className={styles.cta}>
                                    <CTAGroupLight />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}