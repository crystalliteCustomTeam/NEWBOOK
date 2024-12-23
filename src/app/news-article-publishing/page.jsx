import { Awards, Banner1, Reviews, Traditional, TrustedClients } from "@/components";
import { Campaign, ConvertTypes, CreateDesign, Hero, Publishing, TrustAndCredibility } from "@/components/website/news-article-publishing";

export default function NewsArticlePublishing() {
    return (
        <>
        <Hero/>
        <Awards/>
        <TrustAndCredibility/>
        <ConvertTypes/>
        <Publishing/>
        <CreateDesign/>
        <Campaign/>
        <Traditional/>
        <Banner1
        title="Publishing agencies that make empty promises and don’t deliver?"
        desc="Most of our clients were too… until they started working with us. Because at our News / Article Publishing company, we only make promises that we can keep. Book a free consultation to find out if our Publishing agency can get you the results that you’re after."
        />
        <Reviews/>
        <TrustedClients/>
        </>
    )
}