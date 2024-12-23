// Next
import Image from "next/image"
import Newspaper from "media/home/newspaper.png"
// Components
import { CTAGroupLight } from "@/components"
// Css
import style from "./publishing.module.css"

const data = ["Presentation", "Review and Analysis", "Uninterrupted Delivery", "Integrity Certified"]

export default function Publishing() {
    return (
        <section>
            <div className={style.root}>
                <Image src={Newspaper} alt="domain" className={style.img} />
                <div className="container">
                    <div className={style.grids}>
                        <div className={style.cols}>
                            <h2 className={style.title}>Book Marketing’s News/Article Publications</h2>
                            <p className={style.para}>Articles and news publications remain one of the most reliable advertising methods, but finding the right team can be costly and challenging. With Book Marketing’s experienced columnists, journalists, and flexible pricing options, you can maximize your favorite publications and spread the word about your book effectively.</p>
                            <ul className={style.lists}>
                                {
                                    data.map((e) => (
                                        <li key={e} className={style.items}>
                                            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="0.48999" width="28" height="28" rx="5" fill="#F32FA4" />
                                                <path d="M12.2497 16.9225L10.2255 14.8983C9.99805 14.6708 9.63055 14.6708 9.40305 14.8983C9.17555 15.1258 9.17555 15.4933 9.40305 15.7208L11.8414 18.1592C12.0689 18.3867 12.4364 18.3867 12.6639 18.1592L18.8355 11.9875C19.063 11.76 19.063 11.3925 18.8355 11.165C18.608 10.9375 18.2405 10.9375 18.013 11.165L12.2497 16.9225Z" fill="white" />
                                            </svg>
                                            <span>{e}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className={style.cta}>
                                <CTAGroupLight />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}