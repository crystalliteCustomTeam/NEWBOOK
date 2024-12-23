// Next
import Image from "next/image";
// Media
import Image1 from "media/tv-interviews/interviews/10.png"
import Image2 from "media/tv-interviews/interviews/11.png"
import Image3 from "media/tv-interviews/interviews/12.png"
import Image4 from "media/tv-interviews/interviews/13.png"
import Image5 from "media/tv-interviews/interviews/14.png"
import Image6 from "media/tv-interviews/interviews/15.png"
export default function Cards() {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-3 gap-y-10">
            {
                [
                    [Image1,"Tech Talk: Future of Marketing"],
                    [Image2,"Uncovering Ancient Mysteries"],
                    [Image3,"Mindful Living: Finding Inner Peace"],
                    [Image4,"Economic Insights: Global Markets"],
                    [Image5,"Uncovering Ancient Mysteries"],
                    [Image6,"Mindful Living: Finding Inner Peace"],
                ].map(([img,title],i) => (
                    <div key={i}>
                        <Image src={img} alt="domain" />
                        <div className="text-white my-5">
                            <h3 className="3xl:text-[32px] 2xl:text-[28px] xl:text-[24px] text-[20px] leading-tight font-mono mb-3">{title}</h3>
                            <div className="flex justify-between items-center text-sm md:text-base 3xl:text-lg leading-normal font-normal">
                                <div>
                                    <span className="block">Prerequisite:</span>
                                    <span className="block">Television Studio Production</span>
                                </div>
                                <div>
                                    <span className="block">Location:</span>
                                    <span className="block">BRIC House</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
};