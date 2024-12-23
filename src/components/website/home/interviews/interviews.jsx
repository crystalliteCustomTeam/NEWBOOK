// Next
import Image from "next/image"
// Media
import Interview from "media/home/interviews/1.png"
// Components
import { CTAGroupDark, MobileRender } from "@/components"
// Css
import style from "./interviews.module.css"

export default function Interviews() {
    return (
        <section>
            <div className={style.root}>
                <MobileRender>
                    <svg className={style.camera} width="180" height="376" viewBox="0 0 180 376" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.1">
                            <path d="M167.384 240.765V135.452C167.384 47.6904 132.279 12.5859 44.5181 12.5859H-60.7954C-148.557 12.5859 -183.661 47.6904 -183.661 135.452V240.765C-183.661 328.526 -148.557 363.631 -60.7954 363.631H44.5181C132.279 363.631 167.384 328.526 167.384 240.765Z" stroke="white" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M-174.534 102.275H158.257" stroke="white" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M52.9424 14.5137V91.9191" stroke="white" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M-47.6313 231.113V210.05C-47.6313 183.02 -28.4994 171.962 -5.1549 185.477L13.0994 196.009L31.3538 206.54C54.6983 220.055 54.6983 242.171 31.3538 255.686L13.0994 266.218L-5.1549 276.749C-28.4994 290.264 -47.6313 279.206 -47.6313 252.176V231.113V231.113Z" stroke="white" strokeWidth="24" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                    </svg>
                </MobileRender>
                <div className="container">
                    <div className={style._flex}>
                        <div className={style.left}>
                            <h2 className={style.title}>Book Marketing’s Most-Watched TV Interviews</h2>
                            <p className={style.para}>At Book Marketing, we have the perfect guide to ensure your book’s interview remains in the headlines long after it is aired. Make the most of our years of experience and industry partnership with renowned TV Channels and anchors, and access the right visibility your book deserves. </p>

                            <div className={style.cta}>
                                <CTAGroupDark />
                            </div>
                        </div>
                        <div>
                            <Image src={Interview} alt="domain" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}