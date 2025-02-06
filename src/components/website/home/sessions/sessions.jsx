// Next
import Image from "next/image"
// Media
import Screens from "media/home/sessions.png"
// Components
import { CTA, MobileRender } from "@/components"
// Css
import style from "./sessions.module.css"

const data = ["Regular Polls", "Live Feedback","One-On-One Interaction","Seamless Connectivity with Audience"]

export default function Sessions() {
    return (
        <section>
            <div className={style.root}>
                <MobileRender>
                    <svg className={style.camera} width="230" height="377" viewBox="0 0 230 377" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.395 364.09H-112.394C-178.289 364.09 -200.184 320.3 -200.184 276.3V100.721C-200.184 34.826 -178.289 12.9307 -112.394 12.9307H19.395C85.2896 12.9307 107.185 34.826 107.185 100.721V276.3C107.185 342.195 85.0811 364.09 19.395 364.09Z" stroke="white" strokeOpacity="0.04" strokeWidth="24.5812" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M165.155 294.86L107.185 254.198V122.617L165.155 81.9541C193.515 62.1441 216.87 74.2386 216.87 109.063V267.96C216.87 302.784 193.515 314.879 165.155 294.86Z" stroke="white" strokeOpacity="0.04" strokeWidth="24.5812" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M-2.08323 167.656C15.1917 167.656 29.1958 153.652 29.1958 136.377C29.1958 119.102 15.1917 105.098 -2.08323 105.098C-19.3582 105.098 -33.3623 119.102 -33.3623 136.377C-33.3623 153.652 -19.3582 167.656 -2.08323 167.656Z" stroke="white" strokeOpacity="0.04" strokeWidth="24.5812" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </MobileRender>
                <div className="container">
                    <div className={style._flex}>
                        <div className={style.left}>
                            <h2 className={style.title}>Go Live with Book Marketing</h2>
                            <p className={style.para}>Engage with your audience in real-time through Book Marketing’s live session service, fostering a collaborative promotion experience that enhances brand connection and reader engagement. </p>
                            <ul className={style.lists}>
                                {
                                    data.map((e) => (
                                        <li key={e} className={style.items}>
                                            <div className="shrink-0">
                                            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="0.48999" width="28" height="28" rx="5" fill="#F32FA4" />
                                                <path d="M12.2497 16.9225L10.2255 14.8983C9.99805 14.6708 9.63055 14.6708 9.40305 14.8983C9.17555 15.1258 9.17555 15.4933 9.40305 15.7208L11.8414 18.1592C12.0689 18.3867 12.4364 18.3867 12.6639 18.1592L18.8355 11.9875C19.063 11.76 19.063 11.3925 18.8355 11.165C18.608 10.9375 18.2405 10.9375 18.013 11.165L12.2497 16.9225Z" fill="white" />
                                            </svg>
                                            </div>
                                            <span>{e}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className={style.cta}>
                                <CTA icon={false} text="Learn More" link="/live-session" css="hover:bg-black hover:border hover:border-white hover:[boxShadow:0px_5px_15px_rgba(255,_118,_117,_0.3)] bg-gradient hover:bg-none" />
                                <CTA icon="call" css="bg-transparent border-2 border-white hover:text-pink hover:border-pink [&>img]:brightness-0 [&>img]:invert [&:hover>img]:invert-0 [&:hover>img]:brightness-[inherit]" text="(833) 0001 - 2222" />
                            </div>
                        </div>
                        <div>
                            <Image src={Screens} alt="domain" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}