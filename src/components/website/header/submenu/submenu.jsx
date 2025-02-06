// Shadcnui
import { NavigationMenuItem, NavigationMenuLink } from "@/components/shadcnui"
// Next
import Link from "next/link"
import Image from "next/image"
// Media
import Mockup from "media/home/services/promo.png"
// Css
import style from "./submenu.module.css"
import { ArrowBigRight, ChevronRight } from "lucide-react"

const servicesOne = [
  {
    text: "Amazon Optimization",
    href: "/amazon-optimization",
  },
  {
    text: "SMM Follower & Likes",
    href: "/smm-follower-and-likes",
  },
  {
    text: "Email Newsletter",
    href: "/email-newsletter",
  },
  {
    text: "Online Reputation Management",
    href: "/online-reputation-management",
  },
  {
    text: "News / Article Publishing",
    href: "/news-article-publishing",
  },
]

const servicesTwo = [
  {
    text: "Paid Ad Campaigns",
    href: "/paid-ad-campaigns",
  },
  {
    text: "Influencer Marketing",
    href: "/influencer-marketing",
  },
  {
    text: "Search Engine Optimization",
    href: "/search-engine-optimization",
  },
  {
    text: "Google Knowledge Panel",
    href: "/google-knowledge-panel",
  },
  {
    text: "Print Placement (Magazine)",
    href: "/print-placement",
  },
]
const servicesThree = [
  {
    text: "Social Media Marketing",
    href: "/social-media-marketing",
  },
  {
    text: "Video Book Trailer",
    href: "/video-book-trailer",
  },
  {
    text: "Book Launch Campaigns",
    href: "/book-launch-campaigns",
  },
  {
    text: "TV Interviews",
    href: "/tv-interviews",
  },
]

export default function Submenu() {
  return (
    <div className={style.root}>
      <div className={style.left}>
        <div className={style.navText}>
          <h3 className={style.title}>
            Marketing That Puts Your Book in the Spotlight!
          </h3>
          <p className={style.para}>
            We help authors reach the right audience with strategic promotions,
            targeted advertising, and expert branding. From social media buzz to
            bestseller campaigns, we ensure your book gets the attention it
            deserves!
          </p>
        </div>
        <div className={style.links}>
          <div>
            <ul className={style.navlinks}>
              {servicesOne.map(({ text, href }) => (
                <NavigationMenuItem key={text}>
                  <Link href={href} legacyBehavior passHref>
                    <NavigationMenuLink className="flex gap-x-2">
                      <ChevronRight className="text-pink" />
                      <span dangerouslySetInnerHTML={{ __html: text }} />
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </ul>
          </div>
          <div>
            <ul className={style.navlinks}>
              {servicesTwo.map(({ text, href }) => (
                <NavigationMenuItem key={text}>
                  <Link href={href} legacyBehavior passHref>
                    <NavigationMenuLink className="flex gap-x-2">
                      <ChevronRight className="text-pink" />
                      <span dangerouslySetInnerHTML={{ __html: text }} />
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </ul>
          </div>
          <div>
            <ul className={style.navlinks}>
              {servicesThree.map(({ text, href }) => (
                <NavigationMenuItem key={text}>
                  <Link href={href} legacyBehavior passHref>
                    <NavigationMenuLink className="flex gap-x-2">
                      <ChevronRight className="text-pink" />
                      <span dangerouslySetInnerHTML={{ __html: text }} />
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={style.right}>
        <div>
          <h2 className={style.title}>
            Activate Your Coupon
            <br /> 50% off
          </h2>
          <p className={style.para}>Get Affordable Rates</p>
          <Image src={Mockup} alt="domain" width={300} height={300} />
        </div>
      </div>
      <div className={style.bottomBar}>
        <Link href="/" className="flex items-center gap-x-3 justify-center">
          Discover Our Latest Book Marketing Innovations!{" "}
          <ArrowBigRight className="size-7" />
        </Link>
      </div>
    </div>
  )
}
