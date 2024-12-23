import { Awards, Banner1, Reviews, Traditional, TrustedClients } from "@/components";
import { AmazonEcommerce, AutomationServices, ConvertTypes, Hero, MaximumBenefit, ScaleUp } from "@/components/website/amazon-optimization";

export default function AmazonOptimization() {
    return (
        <>
            <Hero />
            <Awards />
            <AmazonEcommerce />
            <ConvertTypes />
            <AutomationServices />
            <ScaleUp />
            <MaximumBenefit />
            <Traditional />
            <Banner1
                title="Need Help Your Amazon Optimization? Free Reputation Consultation"
                desc="Most of our clients were too… until they started working with us. Because at our Amazon Optimization company, we only make promises that we can keep. Book a free consultation to find out if our Amazon Optimization agency can get you the results that you’re after."
            />
            <Reviews/>
            <TrustedClients/>
        </>
    )
}
