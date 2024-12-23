// Next
import Image from "next/image";
// Media
import AmazonAds from "media/amazon-optimization/amazon-ads.png"
// Css
import styles from "./amazon-ecommerce.module.css"

export default function AmazonEcommerce() {
    return (
        <section>
            <div className="pb-[40px]">
                <div className="container">
                    <div className={styles.content}>
                        <h2 className={styles.title}>89% of buyers purchase on Amazon over any other eCommerce site.</h2>
                    </div>
                    <div className="grid grid-cols-12 md:mt-14 mt-8">
                        <div className="lg:col-span-2"></div>
                        <div className="lg:col-span-8 col-span-12">
                            <Image src={AmazonAds} alt="domain" />
                        </div>
                        <div className="lg:col-span-2"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}