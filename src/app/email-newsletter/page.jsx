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
                title="Tired of Book Marketing Companies That Ghost?"
                desc="Unlike other companies, Book Marketing is committed to delivering every promise made. With our 24/7 help, you’re never at risk of being left stranded."
            />
            <Reviews />
            <TrustedClients />
        </>
    )
}