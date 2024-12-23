import { Awards, Banner1, Reviews, Traditional, TrustedClients } from "@/components";
import { AwardWinning, ConvertTypes, FocusedAgency, Hero, Platforms, PowerfulFeatures, SaveTime, Solutions } from "@/components/website/smm-follower-&-likes";

export default function SMMFollowerAndLikes() {
  return (
    <>
    <Hero/>
    <Awards/>
    <AwardWinning/>
    <ConvertTypes/>
    <FocusedAgency/>
    <Solutions/>
    <PowerfulFeatures/>
    <SaveTime/>
    <Platforms/>
    <Traditional/>
    <Banner1 
    title="Need Help Fixing SMM Follower & Likes? Free Reputation Consultation"
    desc="Most of our clients were too… until they started working with us. Because at our Online Reputation Management company, we only make promises that we can keep. Book a free consultation to find out if our ORM agency can get you the results that you’re after."
    />
    <Reviews/>
    <TrustedClients/>
    </>
  )
}
