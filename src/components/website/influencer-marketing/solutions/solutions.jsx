// Components
import { CTAGroupLight } from "@/components";
import Cards from "./cards/cards";
// Css
import styles from "./solutions.module.css"
export default function Solutions() {
  return (
    <div className={styles.root}>
                <div className="container">
                    <div className={styles.__grid}>
                        <div className={styles.content}>
                            <h2 className={styles.title}>Our Services Promise Reach</h2>
                            <p className={styles.para}>Our Online Reputation Management Service is comprehensive, addressing all aspects of your digital presence. Beyond monitoring and content creation, we offer ongoing support, content removal, and strategy to navigate the evolving digital landscape. Our team tracks trends and adapts strategies to keep your online reputation strong and positive.</p>
                            <div className={styles.cta}>
                                <CTAGroupLight />
                            </div>
                        </div>
                        <Cards/>
                    </div>
                </div>
            </div>
  )
}