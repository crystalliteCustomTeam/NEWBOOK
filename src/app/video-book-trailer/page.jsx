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
                title="At Book Marketing, We Offer Cost-Savvy Yet Impactful Book Trailers"
                desc="Unlike other book marketing services, we offer Video Book Trailers at an affordable price without compromising on visual and animation quality. "
            />
            <Reviews />
            <TrustedClients />
        </>
    )
}