import { Awards, Reviews, TrustedClients, WhyChoose } from "@/components"
import {
  CrossPodcast,
  Hero,
  LatestPodcast,
  PodcastingExcellence,
  TrendingPodcasts,
} from "@/components/website/podcast"
// Media
import Icon1 from "media/about-us/icons/1.png"
import Icon2 from "media/about-us/icons/2.png"
import Icon3 from "media/about-us/icons/3.png"
import Icon4 from "media/about-us/icons/4.png"
import { Services } from "@/components/website/social-media-marketing"

export default function Podcasts() {
  return (
    <>
      <Hero />
      <Awards />
      <LatestPodcast />
      <PodcastingExcellence />
      <CrossPodcast />
      <Services />
      <TrendingPodcasts />
      <WhyChoose
        title="Why Choose Book Marketing’s Podcast Services?"
        desc="By hiring us, you can: "
        data={[
          {
            icon: Icon1,
            title: "Grow Your Audience",
            desc: "To reach a wider audience, distribute top-notch podcast episodes on reliable platforms.",
          },
          {
            icon: Icon2,
            title: "Engage your Audience",
            desc: "Craft captivating conversations that encourage brand and book loyalty.",
          },
          {
            icon: Icon3,
            title: "Create Authority",
            desc: "Present insightful information and anecdotes that establish you as a subject-matter authority.",
          },
          {
            icon: Icon4,
            title: "Track Performance",
            desc: "Get data on listener engagement and growth that will aid in the improvement of your content strategy. ",
          },
        ]}
      />
      <Reviews />
      <TrustedClients />
    </>
  )
}
