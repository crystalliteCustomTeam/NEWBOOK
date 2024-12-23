// Components
import { FrontEndForm, MobileRender } from "@/components"
// Media
import Book from "media/home/contact-book.png"
// Next
import Image from "next/image"
// Css
import style from "./contact.module.css"

export default function contact() {
    return (
        <section>
            <div className={style.root}>
                <MobileRender>
                    <Image src={Book} alt="domain" className={style.banner} />
                </MobileRender>
                <div className="container">
                    <div className={style.content}>
                        <h2 className={style.title}>Connect with Book Marketing Today to Learn More!</h2>
                        <p className={style.para}>Think you have a story to tell to the world? Drop us a message so that one of our consultants can reach out to you today.</p>
                        <FrontEndForm label={false} theme="dark" />
                    </div>
                </div>
            </div>
        </section>
    )
}