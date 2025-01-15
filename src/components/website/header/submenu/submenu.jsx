// Shadcnui
import { NavigationMenuItem, NavigationMenuLink } from "@/components/shadcnui"
// Next
import Link from "next/link"
import Image from "next/image"
// Media
import Mockup from "media/home/services/promo.png"
// Css
import style from "./submenu.module.css"
import { ArrowBigRight } from "lucide-react"

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
  }
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
  }
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
          <h3 className={style.title}>We're more than Survey Softwere</h3>
          <p className={style.para}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
            corporis hic laudantium optio, fugiat molestiae culpa itaque neque
            perspiciatis. Reprehenderit?
          </p>
        </div>
        <div className={style.links}>
          <div>
            <ul className={style.navlinks}>
              {servicesOne.map(({ text, href }) => (
                <NavigationMenuItem key={text}>
                  <Link href={href} legacyBehavior passHref>
                    <NavigationMenuLink>
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
                    <NavigationMenuLink>
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
                    <NavigationMenuLink>
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
          <Image src={Mockup} alt="domain" width={350} height={350} />
        </div>
      </div>
      <div className={style.bottomBar}>
        <Link href="/" className="flex items-center gap-x-3 justify-center">Explore Our New Survery Features <ArrowBigRight className="size-8"/></Link>
      </div>
    </div>
  )
}
