// Shadcnui
import { NavigationMenuItem, NavigationMenuLink } from "@/components/shadcnui"
// Next
import Link from "next/link"
import Image from "next/image"
// Media
import Mockup from "media/submenu-mockup.png"
// Css
import style from "./submenu.module.css"

const servicesOne = [
  {
    text: "Amazon <br /> Optimization",
    href: "/amazon-optimization",
  },
  {
    text: "SMM Follower <br /> & Likes",
    href: "/smm-follower-and-likes",
  },
  {
    text: "Email <br /> Newsletter",
    href: "/email-newsletter",
  },
  {
    text: "Online Reputation <br /> Management",
    href: "/online-reputation-management",
  },
]

const servicesTwo = [
  {
    text: "News / Article <br /> Publishing",
    href: "/news-article-publishing",
  },
  {
    text: "Paid Ad <br /> Campaigns",
    href: "/paid-ad-campaigns",
  },
  {
    text: "Influencer <br /> Marketing",
    href: "/influencer-marketing",
  },
  {
    text: "Search Engine <br /> Optimization",
    href: "/search-engine-optimization",
  },
]

const servicesThree = [
  {
    text: "Google Knowledge <br /> Panel",
    href: "/google-knowledge-panel",
  },
  {
    text: "Social Media <br /> Marketing",
    href: "/social-media-marketing",
  },
  {
    text: "Video Book <br /> Trailer",
    href: "/video-book-trailer",
  },
  {
    text: "Book Launch <br /> Campaigns",
    href: "/book-launch-campaigns",
  },
]

const servicesFour = [
  {
    text: "TV <br /> Interviews",
    href: "/tv-interviews",
  },
  {
    text: "Print Placement <br /> (Magazine)",
    href: "/print-placement",
  },
]

export default function Submenu() {
  return (
    <div className={style.root}>
      <div className={style.left}>
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
        <Image src={Mockup} alt="domain" />
      </div>
      <div className={style.right}>
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
        <div>
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
        </div>
      </div>
    </div>
  )
}
