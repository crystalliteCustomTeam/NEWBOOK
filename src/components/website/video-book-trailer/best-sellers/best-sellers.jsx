// Next
import Image from "next/image";
// Media
import Book1 from "media/video-book-trailer/books/1.png"
import Book2 from "media/video-book-trailer/books/2.png"
import Book3 from "media/video-book-trailer/books/3.png"
import Book4 from "media/video-book-trailer/books/4.png"
import Book5 from "media/video-book-trailer/books/5.png"
// Css
import styles from "./best-sellers.module.css"
// Components
import { CTAGroupLight } from "@/components";
export default function BestSellers() {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div className={styles.content}>
                        <h2 className={styles.title}>Our Best Sellers</h2>
                        <p className={styles.para}>We are a full-cycle book writing that combines creative thinking with technical expertise to create creative writing that solve real problems and drive business growth.</p>
                    </div>
                    <div className={styles.cardGrid}>
                        {
                            [Book1, Book2, Book3, Book4, Book5].map((e, i) => (
                                <div key={i} className={`${styles.card} group`}>
                                    <Image src={e} alt="domain" className={`${styles.img} group-hover:scale-105`} />
                                    <h4 className={styles.title}>Book Name</h4>
                                    <p className={styles.para}>We are known for our writing skills that help you attract multiple readers...</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className={styles.cta}>
                        <CTAGroupLight />
                    </div>
                </div>
            </div>
        </section>
    )
}