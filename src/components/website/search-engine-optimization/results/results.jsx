// Component
import { CTAGroupLight } from "@/components";
// Next
import Image from "next/image";
// Media
import CaseStudy from "media/search-engine-optimization/case-study.png"
// Css
import styles from "./results.module.css"
export default function Results() {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div className={styles.grids}>
                        <div>
                            <span className={styles.desc}>Partner with a SEO agency that’s laser focused on your ROI</span>
                            <h2 className={styles.title}>Results are achieved by following a process and appropriately using
                                data</h2>
                            <div className={styles.para}>
                                {
                                    [
                                    "Not us. We know that your ROI is the most important metric at the end of the day.",
                                    "(Because what’s the point of all that traffic if it doesn’t result in sales?!)",
                                    "Want to see if we can get those ROI-driven results for *your* business? That free consultation has got your name written all over it."
                                    ].map((e, i) => (
                                        <p key={i}>{e}</p>
                                    ))}
                            </div>
                            <div className={styles.cta}>
                                <CTAGroupLight />
                            </div>
                        </div>
                        <div>
                            <Image src={CaseStudy} alt="domain" className={styles.img} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}