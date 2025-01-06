import { Awards, Banner1, Reviews, Traditional, TrustedClients } from "@/components";
import { AdvancedManagment, ControlReputation, ConvertTypes, Feedback, Hero, Solutions } from "@/components/website/online-reputation-management";

export default function OnlineReputationManagement() {
    return (
        <>
            <Hero />
            <Awards />
            <Feedback />
            <ConvertTypes />
            <ControlReputation />
            <Solutions />
            <AdvancedManagment />
            <Traditional />
            <Banner1
                title="Need Help Fixing Your Online Reputation? Free Reputation Consultation"
                desc="At our Online Reputation Management company, we make only promises we can keep. Book a free consultation to see how our ORM services can help you"
            />
            <Reviews />
            <TrustedClients />
        </>
    )
}