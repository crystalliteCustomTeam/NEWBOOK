// CSS
import Video from "../video/video"
import styles from "./mail-benefit.module.css"
export default function MailBenefit() {
    return (
        <section>
            <div className="pb-[20px]">
                <div className="container">
                    <div>
                        <h2 className={styles.title}>73% of Customers Prefer Direct Mail over Other Marketing Channels.</h2>
                        <p className={styles.para}>Savvy marketers who diversify their mix with Direct Mail benefit from:</p>
                        <ul className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-0 gap-y-5 items-center lg:max-w-[790px] 3xl:max-w-[900px] mt-[20px]">
                            {
                                [
                                    [
                                        ["Digital Newsletter"],
                                        ["Blog Post Newsletter"],
                                        ["Industry News"]
                                    ],
                                    [
                                        ["Brand News Of The Week!"],
                                        ["Product Newsletter"],
                                        ["Fashion Newsletter"]
                                    ],
                                    [
                                        ["Tech Newsletter"],
                                        ["Brand Acquisition And Certification"],
                                        ["ECommerce Newsletter"],
                                    ],
                                ].map((e, i) => (
                                    <div key={i}>
                                        {
                                            e.map((e, i) => (
                                                <div key={i} className="flex items-center gap-2">
                                                    <span className="block w-max h-max border-[3px] border-[#0069FF] rounded-full bg-transparent p-[2px]"></span>
                                                    <li className="text-[14px] md:text-[16px] 3xl:text-[18px] leading-normal text-navy">{e}</li>
                                                </div>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </ul>
                        <Video/>
                    </div>
                </div>
            </div>
        </section>
    )
}