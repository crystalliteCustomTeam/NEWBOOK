// Components
import { CTAGroupLight } from "@/components"
// Css
import style from "./supoorted-channels.module.css"
// Next
import Image from "next/image"
// Media
import Platforms from "media/social-media-marketing/social-platforms.png"

export default function SupoortedChannels() {
    return (
        <section>
            <div className={style.root}>
                <div className="container">
                    <div className={style._grid}>
                        <div>
                            <Image src={Platforms} alt="domain" className={style.img} />
                        </div>
                        <div>
                            <div className={style.rightCol}>
                                <h2 className={style.title}>Channels Supported!</h2>
                                <p className={style.para}>More than half of consumers* turn to social media to learn about new brands, making social media management an essential component of At Book Marketing, we view social media management as the backbone of our approach, with data that supports our strategy.</p>
                                <div className={style.cta}>
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