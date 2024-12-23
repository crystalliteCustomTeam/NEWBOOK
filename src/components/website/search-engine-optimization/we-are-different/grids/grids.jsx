// Image
import Image from "next/image"
// Css
import styles from "./grids.module.css"
// Media
import Difference from "media/search-engine-optimization/difference.png"
import Others from "media/search-engine-optimization/others.png"
import Book_Marketing from "media/search-engine-optimization/bookmarketing.png"

export default function Grids() {
    return (
        <div>
            <div>
                <h3 className={styles.title}>Take a look at how we’re different:</h3>
            </div>
            <div className={styles.__grid}>
                <div className={styles.mobColumn}>
                    <Image src={Others}
                        alt="domain"
                        className={styles.mobImg}
                    />
                </div>
                <div className={styles.deskColumn}>
                    <Image
                        src={Difference}
                        alt="domain"
                        className={styles.deskImg}
                    />
                </div>
                <div className={styles.mobColumn}>
                    <Image src={Book_Marketing}
                        alt="domain"
                        className={styles.mobImg}
                    />
                </div>
            </div>
        </div>
    )
}