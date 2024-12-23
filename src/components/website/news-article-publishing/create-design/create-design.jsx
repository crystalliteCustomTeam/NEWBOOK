// Components
import { CTAGroupLight } from "@/components";
import Cards from "./cards/cards";
// Css
import styles from "./create-design.module.css"
export default function CreateDesign() {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div className={styles.__grid}>
                        <div>
                            <h2 className={styles.title}>Create News/Article Publishing designs that customers can’t wait to read.</h2>
                            <p className={styles.para}>Publish on Fox and Benzinga. Great for most businesses, it accepts fewer topics but allows more images and links.</p>
                            <div className={styles.cta}>
                                <CTAGroupLight />
                            </div>
                        </div>
                        <Cards />
                    </div>
                </div>
            </div>
        </section>
    )
}