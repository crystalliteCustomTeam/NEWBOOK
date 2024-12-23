import { Reviews, Traditional, TrustedClients } from "@/components";
import { Hero, Form } from "@/components/website/contact-us";

export default function ContactUs() {
    return (
        <>
            <Hero />
            <Form />
            <Traditional />
            <Reviews
                bg="bg-transparent"
            />
            <TrustedClients />
        </>
    )
}