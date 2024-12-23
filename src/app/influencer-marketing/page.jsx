import { Awards, Banner1, Reviews, Traditional, TrustedClients } from "@/components";
import { AmazonInfluencer, ConsumerTrust, ConvertTypes, Hero, OneRoof, SaveTime, Solutions } from "@/components/website/influencer-marketing";

export default function InfluencerMarketing() {
    return (
        <>
            <Hero />
            <Awards />
            <OneRoof />
            <ConvertTypes />
            <ConsumerTrust />
            <Solutions />
            <AmazonInfluencer />
            <SaveTime />
            <Traditional />
            <Banner1
                title="Need Help Your Influencer Marketing? Free Reputation Consultation"
                desc="Most of our clients were too… until they started working with us. Because at our Online Reputation Management company, we only make promises that we can keep. Book a free consultation to find out if our ORM agency can get you the results that you’re after."
            />
            <Reviews/>
            <TrustedClients/>
        </>
    )
}