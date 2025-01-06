// Components
import { Awards, Reviews, Traditional, TrustedClients, WhyChoose } from "@/components";
import { AboutMarketing, BelieveIn, Hero } from "@/components/website/about-us";
// Media
import Icon1 from "media/about-us/icons/1.png"
import Icon2 from "media/about-us/icons/2.png"
import Icon3 from "media/about-us/icons/3.png"
import Icon4 from "media/about-us/icons/4.png"
export default function AboutUs() {
    return (
        <>
            <Hero />
            <Awards />
            <AboutMarketing />
            <BelieveIn />
            <Traditional />
            <WhyChoose title="Why Choose Cross Podcast?"
                desc="At Cross Podcast, we are dedicated to bringing your podcast vision to life. With tailored solutions, innovative tools, and a committed team, we combine creativity and expertise to ensure your podcast reaches the listeners it deserves."
                data={[
                    {
                        icon: Icon1,
                        title: "Expert Podcast Guidance",
                        desc: "Our team brings years of podcasting expertise to help shape, refine, and elevate your content, ensuring a professional and engaging experience."
                    },
                    {
                        icon: Icon2,
                        title: "Customized Marketing Solutions",
                        desc: "We develop targeted marketing strategies to reach your ideal listeners, amplifying your podcast’s reach and growing your audience."
                    },
                    {
                        icon: Icon3,
                        title: "Advanced Recording Tools",
                        desc: "Access cutting-edge technology and high-quality recording tools designed to make your podcast sound top-notch and keep your listeners hooked."
                    },
                    {
                        icon: Icon4,
                        title: "Engaged Listener Community",
                        desc: "Join a vibrant community of podcast enthusiasts who support, inspire, and connect with you as your podcast journey unPages."
                    }
                ]}
            />
            <Reviews />
            <TrustedClients />
        </>
    )
};