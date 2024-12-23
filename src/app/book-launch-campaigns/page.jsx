import { Awards, Banner1, Reviews, Traditional, TrustedClients } from "@/components";
import { BestSellers, ConvertTypes, Hero, Publishing, Solutions, Statistics } from "@/components/website/book-launch-campaigns";

export default function BookLaunchCampaigns() {
    return (
        <>
            <Hero />
            <Awards />
            <Publishing />
            <ConvertTypes />
            <BestSellers />
            <Solutions />
            <Statistics />
            <Traditional />
            <Banner1
                title="Need Help Fixing Book Launch Campaigns? Free Reputation Consultation"
                desc="Most of our clients were too… until they started working with us. Because at our Online Reputation Management company, we only make promises that we can keep. Book a free consultation to find out if our ORM agency can get you the results that you’re after."
            />
            <Reviews />
            <TrustedClients />
        </>
    )
}