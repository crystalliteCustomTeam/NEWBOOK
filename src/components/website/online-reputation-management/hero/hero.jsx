// Next
import Image from "next/image"
// Css
import style from "./hero.module.css"
// Media
import Bg from "media/online-reputation-management/hero-bg.png"
// Components
import { CTAGroupDark } from "@/components"

export default function Hero() {
    return (
        <>
            <section>
                <div className={style.root}>
                    <Image src={Bg} alt="domain" fill priority className={style.bg} />
                    <div className="container">
                        <div>
                            <h1 className={style.title}>
                            Online Reputation Management Services for New Entrepreneurs and First-time Authors
                            </h1>
                            <p className={style.para}>
                            In today's media, false information often outweighs facts. An Online Reputation Management (ORM) Team steps in as a damage control agent, preventing situations from escalating. 
                            </p>
                            <div className={style.cta}>
                                <CTAGroupDark />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}