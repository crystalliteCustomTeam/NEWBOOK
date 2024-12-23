import { Awards, Banner1, Reviews, Traditional, TrustedClients } from "@/components";
import { AdStrategies, Hero, NumbersSpeak, Platforms, RevenueGrowth, Solutions } from "@/components/website/paid-ad-campaigns";

export default function PaidAdCampaigns() {
    return (
        <>
        <Hero/>
        <Awards/>
        <RevenueGrowth/>
        <Platforms/>
        <AdStrategies/>
        <Solutions/>
        <NumbersSpeak/>
        <Traditional/>
        <Banner1 
        title="Need Help Fixing Your Paid Campaigns? Free Reputation Consultation"
        desc="Most of our clients were too… until they started working with us. Because at our Paid Ad Campaigns company, we only make promises that we can keep. Book a free consultation to find out if our Paid Ad agency can get you the results that you’re after."
        />
        <Reviews/>
        <TrustedClients/>
        </>
    )
}