import { Awards, Banner1, Reviews, Traditional, TrustedClients } from "@/components";
import { BestSellers, ConvertTypes, Hero, Publishing, Solutions, Video } from "@/components/website/video-book-trailer";

export default function VideoBookTrailer() {
    return (
        <>
            <Hero />
            <Awards />
            <Video />
            <ConvertTypes />
            <Publishing />
            <Solutions />
            <BestSellers />
            <Traditional />
            <Banner1
                title="Need Help Fixing Your Video Book Trailer? Free Reputation Consultation"
                desc="Most of our clients were too… until they started working with us. Because at our Online Reputation Management company, we only make promises that we can keep. Book a free consultation to find out if our ORM agency can get you the results that you’re after."
            />
            <Reviews />
            <TrustedClients />
        </>
    )
}