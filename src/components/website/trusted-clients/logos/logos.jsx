// Next
import Image from "next/image";
// Css
import styles from "./logos.module.css"
// Media
import Logo1 from "media/home/trusted-clients/logos/1.jpg"
import Logo2 from "media/home/trusted-clients/logos/2.jpg"
import Logo3 from "media/home/trusted-clients/logos/3.jpg"
import Logo4 from "media/home/trusted-clients/logos/4.jpg"
import Logo5 from "media/home/trusted-clients/logos/5.jpg"
import Logo6 from "media/home/trusted-clients/logos/6.jpg"
import Logo7 from "media/home/trusted-clients/logos/7.jpg"
import Logo8 from "media/home/trusted-clients/logos/8.jpg"
import Logo9 from "media/home/trusted-clients/logos/9.jpg"
import Logo10 from "media/home/trusted-clients/logos/10.jpg"
import Logo11 from "media/home/trusted-clients/logos/11.jpg"
import Logo12 from "media/home/trusted-clients/logos/12.jpg"

export default function Logos() {
    return (
        <div className={styles.root}>
            <div className={styles.__grid1}>
                {
                    [Logo1, Logo2, Logo3, Logo4, Logo5].map((e, i) => (
                        <div key={i}>
                            <Image src={e} alt="icons" />
                        </div>
                    ))
                }
            </div>

            <div className={styles.__grid2}>
                {
                    [Logo6, Logo7, Logo8, Logo9].map((e, i) => (
                        <div key={i}>
                            <Image src={e} alt="icons" />
                        </div>
                    ))
                }
            </div>

            <div className={styles.__grid3}>
                {
                    [Logo10, Logo11, Logo12].map((e, i) => (
                        <div key={i}>
                            <Image src={e} alt="icons" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
};