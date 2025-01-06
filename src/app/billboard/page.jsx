import {
  Awards,
  Banner1,
  Reviews,
  Traditional,
  TrustedClients,
} from "@/components"
import {
  Advertise,
  ConvertTypes,
  Hero,
  Publishing,
  Solutions,
  Video,
} from "@/components/website/billboard"

export default function Billboard() {
  return (
    <>
      <Hero />
      <Awards />
      <Video />
      <ConvertTypes />
      <Advertise />
      <Solutions />
      <Publishing />
      <Traditional />
      <Banner1
        title="In Search Of A Way To Showcase Your Work At Timesquare? "
        desc="Get a free consultation with Book Marketing today to learn how you can have your brand advertised in Timesquare without burning a hole in your pocket."
      />
      <Reviews />
      <TrustedClients />
    </>
  )
}
