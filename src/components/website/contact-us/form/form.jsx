// Components
import { FrontEndForm } from "@/components"
// Css
import style from "./form.module.css"

export default function contact() {
    return (
        <section>
            <div className={style.root}>
                <div className="container">
                    <div className={style.content}>
                        <h2 className={style.title}>Interested? Let’s talk!</h2>
                        <p className={style.para}>Just fill this simple form in and we will contact you promptly to discuss your project. Hate forms? Drop us a line at</p>
                        <FrontEndForm label={false} lastName={true} policy={true} nda={true} />
                    </div>
                </div>
            </div>
        </section>
    )
}