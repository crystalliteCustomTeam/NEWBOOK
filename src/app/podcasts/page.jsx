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
        desc="At Cross Podcast, we blend expertise with creativity to deliver exceptional podcasting solutions. Here's why we're the top choice for your podcasting needs:"
        data={[
          {
            icon: Icon1,
            title: "Diverse Podcasting Expertise",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
          },
          {
            icon: Icon2,
            title: "Supportive Community",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
          },
          {
            icon: Icon3,
            title: "Cutting-Edge Technology",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
          },
          {
            icon: Icon4,
            title: "Exclusive Merchandise",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
          },
        ]}
      />
      <Reviews/>
      <TrustedClients/>
    </>
  )
}
