import {
  Awards,
  Banner1,
  Reviews,
  Traditional,
  TrustedClients,
} from "@/components"
import {
  Capabilities,
  ConvertTypes,
  Hero,
  Narratives,
  OneRoof,
  Possibilities,
} from "@/components/website/print-placement"

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
        title="Unsure of How Print Placement Can Boost Your Book’s Value?"
        desc="Send a message for a consulttion with Book Marketing’s Print Placement team to learn more about our service and how it can increase your book’s revenue. "
      />
      <Reviews />
      <TrustedClients />
    </>
  )
}
