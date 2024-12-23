// Next
import Image from "next/image";
// Media
import PossibilityImg1 from "media/print-placement/possibilities/1.png"
import PossibilityImg2 from "media/print-placement/possibilities/2.png"
import PossibilityImg3 from "media/print-placement/possibilities/3.png"
// Css
import styles from "./possibilities.module.css"
export default function Possibilities() {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div>
                        <h2 className={styles.title}>Imagine The Possibilities</h2>
                    </div>
                    <div className={styles.__grid}>
                        {
                            [
                                [PossibilityImg1],
                                [PossibilityImg2],
                                [PossibilityImg3]
                            ].map(([img], i) => (
                                <div key={i} className={styles.card}>
                                    <div className={styles.imgCard}>
                                    <Image src={img} alt="domain" className={styles.img} />
                                    </div>
                                    <div className={styles.content}>
                                        <h3 className={styles.title}>Book Marketing</h3>
                                        <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}