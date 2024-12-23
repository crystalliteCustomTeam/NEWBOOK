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
                desc="Most of our clients were too… until they started working with us. Because at our Online Reputation Management company, we only make promises that we can keep. Book a free consultation to find out if our ORM agency can get you the results that you’re after."
            />
            <Reviews />
            <TrustedClients />
        </>
    )
}