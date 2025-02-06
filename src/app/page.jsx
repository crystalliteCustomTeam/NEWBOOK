// Components
import { Awards, WhyChoose, Reviews, TrustedClients } from "@/components"
import { Hero, Publishing, Services, Sessions, TrendingPodcast, Billboard, PublishedBooks, Interviews, LatestPublished, Contact } from "@/components/website/home"

export default function Page() {

  return (
    <>
      <Hero />
      <Awards />
      <Services />
      <PublishedBooks />
      <Sessions />
      <Publishing />
      <Billboard />
      <WhyChoose />
      {/* <LatestPublished /> */}
      {/* <Interviews /> */}
      <Reviews />
      <TrendingPodcast />
      <TrustedClients />
      <Contact />
    </>
  )
}