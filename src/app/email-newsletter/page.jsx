import { Awards, Banner1, Reviews, Traditional, TrustedClients } from "@/components";
import { Campaign, ConvertTypes, EmailsSlap, Hero, MailBenefit, Templates } from "@/components/website/email-newsletter";

export default function EmailNewsletter() {
    return (
        <>
            <Hero />
            <Awards />
            <MailBenefit />
            <ConvertTypes />
            <EmailsSlap />
            <Templates />
            <Campaign />
            <Traditional />
            <Banner1
                title="Email Marketing agencies that make empty promises and don’t deliver?"
                desc="Most of our clients were too… until they started working with us. Because at our SEO company, we only make promises that we can keep. Book a free consultation to find out if our SEO agency can get you the results that you’re after."
            />
            <Reviews />
            <TrustedClients />
        </>
    )
}