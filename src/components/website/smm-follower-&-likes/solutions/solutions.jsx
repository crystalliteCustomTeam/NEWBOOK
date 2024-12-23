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
                            <h2 className={styles.title}>Social Media Marketing Solutions!</h2>
                            <p className={styles.para}>Our Online Reputation Management Service is comprehensive, covering all aspects of digital presence. We don’t just stop at monitoring and creating content. We also provide ongoing support, content removal, and strategy, helping you navigate the ever-changing digital landscape. Our team stays on top of trends and adapts strategies to ensure that your online reputation remains strong and positive, reflecting the dynamic nature of the internet.</p>
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