// Shadcnui
import { NavigationMenuItem, NavigationMenuLink } from "@/components/shadcnui"
// Next
import Link from "next/link"
import Image from "next/image"
// Media
import Mockup from "media/home/services/promo.png"
// Css
import style from "./submenu.module.css"

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
  {
    text: "Paid Ad Campaigns",
    href: "/paid-ad-campaigns",
  },
  {
    text: "Influencer Marketing",
    href: "/influencer-marketing",
  },
]

const servicesTwo = [
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
  }
]

export default function Submenu() {
  return (
    <div className={style.root}>
      <div className={style.left}>
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
        {/* <div>
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
        </div> */}
        {/* <div>
          <ul className={style.navlinks}>
          {servicesFour.map(({ text, href }) => (
            <NavigationMenuItem key={text}>
                <Link href={href} legacyBehavior passHref>
                  <NavigationMenuLink>
                  <span dangerouslySetInnerHTML={{ __html: text }} />
                  </NavigationMenuLink>
                  </Link>
                  </NavigationMenuItem>
                  ))}
                  </ul>
                  </div> */}
      </div>
      <div className={style.right}>
        <Image src={Mockup} alt="domain" />
        <div>
          <h2 className={style.title}>
            Activate Your <span className="text-blue">Coupon</span>{" "}
            <span className="text-pink">
              {" "}
              <br /> 50% off
            </span>
          </h2>
          <p className={style.para}>Get Affordable Rates</p>
        </div>
      </div>
    </div>
  )
}
