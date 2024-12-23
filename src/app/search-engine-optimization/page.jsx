import { Awards, Banner1, Reviews, Traditional, TrustedClients } from "@/components";
import { Hero, ConvertTypes, SeoAgencies, Results, Process, WeAreDifferent } from "@/components/website/search-engine-optimization";

export default function SearchEngineOptimization() {
    return (
        <>
        <Hero/>
        <Awards/>
        <SeoAgencies/>
        <ConvertTypes/>
        <Results/>
        <Process/>
        <WeAreDifferent/>
        <Traditional/>
        <Banner1 
        title="Sick of SEO agencies that make empty promises and don’t deliver?"
        desc = "Most of our clients were too… until they started working with us. Because at our SEO company, we only make promises that we can keep. Book a free consultation to find out if our SEO agency can get you the results that you’re after."
        />
        <Reviews/>
        <TrustedClients/>
        </>
    )
}