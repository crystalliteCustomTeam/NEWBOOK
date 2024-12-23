import { Awards, Banner1, Reviews, Traditional, TrustedClients } from "@/components";
import { Capabilities, ConvertTypes, Hero, Narratives, OneRoof, Possibilities } from "@/components/website/print-placement";

export default function PrintPlacement() {
    return (
        <>
            <Hero />
            <Awards />
            <OneRoof />
            <ConvertTypes />
            <Capabilities />
            <Possibilities />
            <Narratives />
            <Traditional />
            <Banner1
                title="Need Help Fixing Your Print Placement? Free Reputation Consultation"
                desc="Most of our clients were too… until they started working with us. Because at our Online Reputation Management company, we only make promises that we can keep. Book a free consultation to find out if our ORM agency can get you the results that you’re after."
            />
            <Reviews />
            <TrustedClients />
        </>
    )
}