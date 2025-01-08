// Components
import { CTA, MobileRender } from "@/components"
// Next
import Image from "next/image"
// Media
import Promo from "media/home/services/promo.png"
// Css
import styles from "./cards.module.css"

const data = [
  {
    title: "Amazon <br class='hidden sm:block' /> Optimization",
    para: "Amazon listings have become a powerful advertising tool. Leverage Book Marketing’s expert Amazon Optimization team to keep your book aligned with trending algorithms",
    cta: "Read More",
    ctaLink: "/amazon-optimization",
  },
  {
    title: "SMM Follower <br class='hidden sm:block' /> & Likes",
    para: "Book Marketing ensures that your social media accounts are always growing in terms of followers and likes via organic and engaging content.",
    cta: "Read More",
    ctaLink: "/smm-follower-and-likes",
  },
  {
    title: "Email <br class='hidden sm:block' /> Newsletter",
    para: "Keep your devoted readers engaged and informed about your book's release and upcoming events with Book Marketing’s expertly crafted newsletters. ",
    cta: "Read More",
    ctaLink: "/email-newsletter",
  },
  {
    title: "Online Reputation <br class='hidden sm:block' /> Management",
    para: "Stay ahead of your growing social media community to protect your reputation and build rapport with the 24/7 support of our ORM Team.",
    cta: "Read More",
    ctaLink: "/online-reputation-management",
  },
  {
    title: "News / Article <br class='hidden sm:block' /> Publishing",
    para: "An article by renowned columnists in prestigious publications provides the credibility needed to assure your audience they're in for a treat.",
    cta: "Read More",
    ctaLink: "/news-article-publishing",
  },
  {
    title: "Paid Ad <br class='hidden sm:block' /> Campaigns",
    para: "Paid campaigns ensure that your book finds its way to your desired audience across all platforms easily, increasing its visibility.",
    cta: "Read More",
    ctaLink: "/paid-ad-campaigns",
  },
  {
    title: "Influencer <br class='hidden sm:block' /> Marketing",
    para: "Influencer Marketing makes your book accessible to newer audiences by highlighting all that is relevant and trending. ",
    cta: "Read More",
    ctaLink: "/influencer-marketing",
  },
  {
    title: "Search Engine <br class='hidden sm:block' /> Optimization",
    para: "Drive organic visibility of your book with the right SEO techniques so the right readers for your book can find you easily.",
    cta: "Read More",
    ctaLink: "/search-engine-optimization",
  },
  {
    title: "Google Knowledge <br class='hidden sm:block' /> Panel",
    para: "Enhance your readers’ search for your book by providing them with all the necessary facts for your book’s marketing. ",
    cta: "Read More",
    ctaLink: "/google-knowledge-panel",
  },
  {
    title: "Social Media <br class='hidden sm:block' /> Marketing",
    para: "Start building a community of readers with a niche-driven strategy of social media marketing.",
    cta: "Read More",
    ctaLink: "/social-media-marketing",
  },
  {
    title: "Video Book <br class='hidden sm:block' /> Trailer",
    para: "Let a visual glimpse of your book’s plot drive the reader’s interest and leave them anticipating the story.",
    cta: "Read More",
    ctaLink: "/video-book-trailer",
  },
  {
    title: "Book Launch <br class='hidden sm:block' /> Campaigns",
    para: "Create the right hype to gain momentum for your book even before its launch.",
    cta: "Read More",
    ctaLink: "/book-launch-campaigns",
  },
  {
    title: "TV <br class='hidden sm:block' /> Interviews",
    para: "TV Interviews enable you to put the best of your book out there for a wider audience.",
    cta: "Read More",
    ctaLink: "/tv-interviews",
  },
  {
    title: "Print Placement <br class='hidden sm:block' /> (Magazine)",
    para: "Magazines are the perfect resolution to get your book the international recognition it deserves. ",
    cta: "Read More",
    ctaLink: "/print-placement",
  },
]

export default function Cards() {
  return (
    <div className={styles.root}>
      {data.map(({ title, para, cta, ctaLink }) => (
        <div key={title} className={`${styles.cards} group`}>
          <h3
            className={`${styles.title} group-hover:text-white`}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className={`${styles.para} group-hover:text-white`}>{para}</p>
          <div
            className={styles.cta}
            dangerouslySetInnerHTML={{
              __html: `<a href=${ctaLink}>
                                ${cta}
                                <img src="/icons/right-chevron.svg" width="8" height="13" alt="domain" />
                            </a>`,
            }}
          />
        </div>
      ))}
      <MobileRender>
        <div className={styles.promo}>
          <div>
            <h3 className={styles.title}>
              Estimate Your Book Marketing <br className="hidden sm:block" />{" "}
              Project’s Cost Now!
            </h3>
            <p className={styles.para}>
              Partner with us to make your book reach its full potential of
              success. Reach out to us today to get the best price quote!
            </p>
            <CTA
              css="bg-white text-purple font-manrope font-medium capitalize [boxShadow:0px_5px_15px_rgba(15,_23,_42,_0.1)] hover:bg-black hover:border hover:border-white hover:text-white"
              text="Let’s Talk!"
              icon="chat-pink"
            />
          </div>
          <Image src={Promo} alt="domain" />
        </div>
      </MobileRender>
    </div>
  )
}
