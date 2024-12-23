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
        text: "Book Launch <br /> Campaigns",
        href: "/book-launch-campaigns"
    },
    {
        text: "Amazon <br /> Optimization",
        href: "/amazon-optimization"
    },
    {
        text: "TV <br /> Interviews",
        href: "/tv-interviews"
    },
    {
        text: "Email <br /> Newsletter",
        href: "/email-newsletter"
    }
]

const servicesTwo = [
    {
        text: "Social Media <br /> Marketing",
        href: "/social-media-marketing"
    },
    {
        text: "Online Reputation <br /> Management",
        href: "/online-reputation-management"
    },
    {
        text: "SMM Follower <br /> & Likes",
        href: "/smm-follower-and-likes",
    },
    {
        text: "Influencer <br /> Marketing",
        href: "/influencer-marketing",
    }
]

const servicesThree = [
    {
        text: "Video Book <br /> Trailer",
        href: "/video-book-trailer",
    },
    {
        text: "Search Engine <br /> Optimization",
        href: "/search-engine-optimization",
    },
    {
        text: "Print Placement <br /> (Magazine)",
        href: "/print-placement",
    },
    {
        text: "News / Article <br /> Publishing",
        href: "/news-article-publishing",
    }
]

const servicesFour = [
    {
        text: "Paid Ad <br /> Campaigns",
        href: "/paid-ad-campaigns",
    },
    {
        text: "Google Knowledge <br /> Panel",
        href: "/google-knowledge-panel",
    }
]

export default function Submenu() {
    return (
        <div className={style.root}>
            <div className={style.left}>
                <div>
                    <h2 className={style.title}>
                        Activate Your <span className="text-blue">Coupon</span> <span className="text-pink"> <br /> 50% off</span>
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
