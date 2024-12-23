// Next
import dynamic from "next/dynamic"
// Components
import { MobileRender } from "@/components"
const Logos = dynamic(() => import('./logos/logos'))
// Css
import styles from "./trusted-clients.module.css"

export default function TrustedClients() {
    return (
        <MobileRender>
            <section>
                <div className={styles.root}>
                    <div className="container">
                        <div className={styles.__content}>
                            <h2 className={styles.title}>Our trusted clients!</h2>
                        </div>
                        <Logos />
                    </div>
                </div>
            </section>
        </MobileRender>
    )
}
