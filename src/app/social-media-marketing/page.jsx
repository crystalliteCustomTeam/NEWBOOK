// Components
import { Awards, Reviews, Traditional, TrustedClients, WhyChoose } from "@/components"
import { Hero, ConvertTypes, OurMarketing, ImportanceOf, TrendingPosts, SupoortedChannels, Video, CaseStudy, Services } from "@/components/website/social-media-marketing"
// Media
import Icon1 from "media/about-us/icons/1.png"
import Icon2 from "media/about-us/icons/2.png"
import Icon3 from "media/about-us/icons/3.png"
import Icon4 from "media/about-us/icons/4.png"

export default function Page() {
    return (
        <>
            <Hero />
            <ConvertTypes />
            <OurMarketing />
            <Awards />
            <ImportanceOf />
            <TrendingPosts />
            <SupoortedChannels />
            <Traditional />
            <Video />
            <CaseStudy />
            <Services />
            <WhyChoose
                desc="At Book Marketing, we combine creativity with strategy to deliver impactful solutions for promoting your book."
                data={[
                    {
                        icon: Icon1,
                        title: "Diverse Marketing Strategies",
                        desc: "Our book marketing services reach diverse audiences through social media campaigns, email marketing, and influencer partnerships to ensure your book gets noticed."
                    },
                    {
                        icon: Icon2,
                        title: "Supportive Community",
                        desc: "We help you build a loyal community of readers by fostering engagement and encouraging discussions, turning them into passionate advocates for your book."
                    },
                    {
                        icon: Icon3,
                        title: "Cutting-Edge Digital Tools",
                        desc: "Stay ahead with cutting-edge digital marketing tools, using targeted ads and analytics to ensure your book gets the attention it deserves."
                    },
                    {
                        icon: Icon4,
                        title: "Exclusive Author Merchandise",
                        desc: "Engage your audience with branded merchandise that reflects your book's theme. From bookmarks to custom prints, we create memorable items that fans can cherish and share."
                    }
                ]}
            />
            <Reviews />
            <TrustedClients />
        </>
    )
}