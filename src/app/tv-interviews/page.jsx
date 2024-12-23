import { Awards, Banner1, Reviews, Traditional, TrustedClients } from "@/components";
import { ConvertType, Hero, LatestInterviews, TrendsInterview,Solutions, TvPlacement } from "@/components/website/tv-interviews";

export default function TVInterviews() {
    return (
        <>
            <Hero />
            <Awards />
            <LatestInterviews />
            <ConvertType />
            <TrendsInterview />
            <Solutions />
            <TvPlacement />
            <Traditional />
            <Banner1
                title="Need Help Fixing Your TV Interviews? Free Reputation Consultation"
                desc="Most of our clients were too… until they started working with us. Because at our Online Reputation Management company, we only make promises that we can keep. Book a free consultation to find out if our ORM agency can get you the results that you’re after."
            />
            <Reviews />
            <TrustedClients />
        </>
    )
}