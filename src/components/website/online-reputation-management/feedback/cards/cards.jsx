// Next
import Image from "next/image";
// Media
import Avater1 from "media/online-reputation-management/icons/avater/1.png"
import Avater2 from "media/online-reputation-management/icons/avater/2.png"
import Stars from "media/online-reputation-management/icons/1.png"
// Css
import style from "./cards.module.css"
// Component
import { AutoScrollSlider } from "@/components";
export default function Cards() {
    return (
        <div>
            {
                ["forward", "backward", "forward", "backward"].map((e, i) => (
                    <AutoScrollSlider key={i} direction={e} align="center" >
                        {
                            [
                                {
                                    avater: Avater1,
                                    bg:"bg-[#DBD1FC]",
                                    title: "“The best time manager app”",
                                    para: "This calendar app has been a lifesaver! I used to forget important events, but now I'm always on top of my schedule.",
                                },
                                {
                                    avater: Avater2,
                                    bg:"bg-[#FFC7D6]",
                                    title: "“The best time manager app”",
                                    para: "This calendar app has been a lifesaver! I used to forget important events, but now I'm always on top of my schedule.",
                                },
                                {
                                    avater: Avater1,
                                    bg:"bg-[#FFD9A2]",
                                    title: "“The best time manager app”",
                                    para: "This calendar app has been a lifesaver! I used to forget important events, but now I'm always on top of my schedule.",
                                },
                                {
                                    avater: Avater2,
                                    bg:"bg-[#DBD1FC]",
                                    title: "“The best time manager app”",
                                    para: "This calendar app has been a lifesaver! I used to forget important events, but now I'm always on top of my schedule.",
                                },
                                {
                                    avater: Avater2,
                                    bg:"bg-[#FFC7D6]",
                                    title: "“The best time manager app”",
                                    para: "This calendar app has been a lifesaver! I used to forget important events, but now I'm always on top of my schedule.",
                                },
                                {
                                    avater: Avater1,
                                    bg:"bg-[#FFD9A2]",
                                    title: "“The best time manager app”",
                                    para: "This calendar app has been a lifesaver! I used to forget important events, but now I'm always on top of my schedule.",
                                },
                                {
                                    avater: Avater2,
                                    bg:"bg-[#DBD1FC]",
                                    title: "“The best time manager app”",
                                    para: "This calendar app has been a lifesaver! I used to forget important events, but now I'm always on top of my schedule.",
                                },
                                {
                                    avater: Avater1,
                                    bg:"bg-[#FFC7D6]",
                                    title: "“The best time manager app”",
                                    para: "This calendar app has been a lifesaver! I used to forget important events, but now I'm always on top of my schedule.",
                                },
                                {
                                    avater: Avater2,
                                    bg:"bg-[#FFD9A2]",
                                    title: "“The best time manager app”",
                                    para: "This calendar app has been a lifesaver! I used to forget important events, but now I'm always on top of my schedule.",
                                },
                                {
                                    avater: Avater1,
                                    bg:"bg-[#DBD1FC]",
                                    title: "“The best time manager app”",
                                    para: "This calendar app has been a lifesaver! I used to forget important events, but now I'm always on top of my schedule.",
                                },
                                {
                                    avater: Avater2,
                                    bg:"bg-[#FFC7D6]",
                                    title: "“The best time manager app”",
                                    para: "This calendar app has been a lifesaver! I used to forget important events, but now I'm always on top of my schedule.",
                                },
                                {
                                    avater: Avater1,
                                    bg:"bg-[#FFD9A2]",
                                    title: "“The best time manager app”",
                                    para: "This calendar app has been a lifesaver! I used to forget important events, but now I'm always on top of my schedule.",
                                },
                                {
                                    avater: Avater2,
                                    bg:"bg-[#DBD1FC]",
                                    title: "“The best time manager app”",
                                    para: "This calendar app has been a lifesaver! I used to forget important events, but now I'm always on top of my schedule.",
                                },
                                {
                                    avater: Avater1,
                                    bg:"bg-[#DBD1FC]",
                                    title: "“The best time manager app”",
                                    para: "This calendar app has been a lifesaver! I used to forget important events, but now I'm always on top of my schedule.",
                                }
                            ].map(({ avater,bg, title, para }, i) => (
                                <div key={i} className={style.slides}>
                                    <div className={style.cards}>
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-3">
                                                <Image src={avater} alt="domain" width={40} height={40} className={`${bg} rounded-full`} />
                                                <h3 className={style.title}
                                                    dangerouslySetInnerHTML={{ __html: title }}
                                                />
                                            </div>
                                            <Image src={Stars} alt="domain" width={80} height={20} />
                                        </div>
                                        <p className={style.para}>
                                            {para}
                                        </p>
                                        <div className="flex items-center justify-between mt-2">
                                            <span className="block font-bold font-manrope sm:text-base text-sm leading-tight">Sophie Moore</span>
                                            <span className="block font-normal text-[#6B6B78] text-sm leading-tight">Head of marketing</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </AutoScrollSlider>
                ))
            }
        </div>
    )
}
