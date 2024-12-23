import {
  Awards,
  Banner1,
  Reviews,
  Traditional,
  TrustedClients,
} from "@/components"
import {
  ConvertTypes,
  Hero,
  IncreasePresence,
  KeywordResearch,
  LogicalProcess,
  ResearchImportant,
  Solutions,
} from "@/components/website/google-knowledge-panel"

export default function GoogleKnowledgePanel() {
  return (
    <>
      <Hero />
      <Awards />
      <KeywordResearch />
      <ConvertTypes />
      <LogicalProcess />
      <Solutions />
      <IncreasePresence />
      <ResearchImportant />
      <Traditional />
      <Banner1
        title="Need Help Fixing Google Knowledge Panel? Free Reputation Consultation"
        desc="Most of our clients were too… until they started working with us. Because at our Online Reputation Management company, we only make promises that we can keep. Book a free consultation to find out if our ORM agency can get you the results that you’re after."
      />
      <Reviews />
      <TrustedClients />
    </>
  )
}
