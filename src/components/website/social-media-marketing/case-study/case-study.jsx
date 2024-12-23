// Css
import style from "./case-study.module.css"
// Components
import { CTAGroupDark } from "@/components"
import Video from "./video/video"

export default function CaseStudy() {
    return (
        <section>
            <div className="bg-black pt-[75px] pb-[125px] lg:py-[150px] text-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-y-0 gap-x-5 3xl:gap-x-10 items-center">
                        <div>
                            <p className="text-[16px] md:text-[18px] xl:text-[20px] 3xl:text-[24px] leading-normal mb-3">Case Study</p>
                            <h2 className="text-[30px] md:text-[36px] xl:text-[45px] 2xl:text-[50px] 3xl:text-[60px] leading-[1.1] font-mono sm:max-w-[40%] md:max-w-[40%] lg:max-w-[60%] mb-3">What's Possible With Our Social Media?</h2>
                            <p className="text-[14px] sm:text-[16px] xl:text-[18px] 3xl:text-[20px] leading-normal mb-8 max-w-[90%] xl:max-w-[85%] 2xl:max-w-[70%]">Had a growing online audience that engaged with their blog and large podcast network. They turned to Coast Digital to help formulate the growth strategy of how to turn their loyal fans into paying customers.</p>
                            <div className="grid grid-cols-2 gap-5 3xl:gap-10 max-w-[470px] 3xl:max-w-[510px] mb-8">
                                <div>
                                    <h3 className="text-[30px] md:text-[36px] xl:text-[45px] 2xl:text-[50px] 3xl:text-[60px] leading-[1.1] font-mono text-pink">405%</h3>
                                    <p className="text-[14px] sm:text-[16px] xl:text-[18px] 3xl:text-[20px] leading-normal">Meta ROI in first 12 months managing</p>
                                </div>
                                <div>
                                    <h3 className="text-[30px] md:text-[36px] xl:text-[45px] 2xl:text-[50px] 3xl:text-[60px] leading-[1.1] font-mono text-pink">545%</h3>
                                    <p className="text-[14px] sm:text-[16px] xl:text-[18px] 3xl:text-[20px] leading-normal">Google Ads ROI in first 12 months managing</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <CTAGroupDark />
                            </div>
                        </div>
                        <div className="flex justify-center gap-x-5 3xl:gap-x-10 mt-[100px] lg:mt-0">
                            <div className="relative top-[-50px]">
                                <Video />
                            </div>
                            <div className="relative top-[50px]">
                                <Video src="https://player.vimeo.com/progressive_redirect/playback/1019616217/rendition/720p/file.mp4?loc=external&log_user=0&signature=76ba39fbfa91e22f579827ef44c132ef8491bfc38c4010861c10665e627146c8" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}