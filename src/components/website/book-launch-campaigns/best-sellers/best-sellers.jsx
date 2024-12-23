// Next
import Image from "next/image"
// Css
import styles from "./best-sellers.module.css"
// Media
import Book1 from "media/book-launch-campaigns/bestSellers/1.png"
import Book2 from "media/book-launch-campaigns/bestSellers/2.png"
import Book3 from "media/book-launch-campaigns/bestSellers/3.png"
import Book4 from "media/book-launch-campaigns/bestSellers/4.png"
import Book5 from "media/book-launch-campaigns/bestSellers/5.png"
import Book6 from "media/book-launch-campaigns/bestSellers/6.png"
import Book7 from "media/book-launch-campaigns/bestSellers/7.png"
export default function BestSellers() {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div className={styles.content}>
                        <h2 className={styles.title}>Our Best Sellers</h2>
                        <p className={styles.para}>We are a full-cycle book writing that combines creative thinking with technical expertise to create creative writing that solve real problems and drive business growth.</p>
                    </div>
                    <div className={styles.__grid}>
                        <div className={styles.leftColumn}>
                            <div className={styles.cardGrid}>
                                {
                                    [Book1, Book2, Book3, Book4, Book5, Book6].map((e, i) => (
                                        <div key={i} className={`${styles.card} group`}>
                                            <Image src={e} alt="domain" className={`${styles.img} group-hover:scale-105`} />
                                            <h4 className={styles.title}>Book Name</h4>
                                            <p className={styles.para}>We are known for our writing skills that help you attract multiple readers...</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={styles.rightColumn}>
                            <div className={styles.bg}>
                                <h3 className={styles.title2}>Hire The Best Book Launch Campaigns In USA To Showcase Your Masterpiece To The World</h3>
                                <div>
                                    <Image src={Book7} alt="domain" className={styles.rightImg} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}