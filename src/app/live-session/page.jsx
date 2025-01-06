import { Awards, Banner1, Reviews, Traditional, TrustedClients } from "@/components"
import { ConvertTypes, Hero, Score, Sessions } from "@/components/website/live-session"

export default function LiveSession() {
  return (
    <>
      <Hero />
      <Awards/>
      <Score/>
      <ConvertTypes/>
      <Sessions/>
      <Traditional/>
      <Banner1 
      title="Looking for Affordable But Impactful Live Sessions?"
      desc="Connect with one of our representative now to learn how Book Marketing’s Live Sessions work, and how they can benefit your brand."
      />
      <Reviews/>
      <TrustedClients/>
    </>
  )
}
