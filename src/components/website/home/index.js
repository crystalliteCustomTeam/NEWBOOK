import dynamic from "next/dynamic"

const Hero = dynamic(() => import("./hero/hero"))
const Services = dynamic(() => import("./services/services"))
const TrendingPodcast = dynamic(() => import("./trending-podcast/trending-podcast"))
const Publishing = dynamic(() => import("./publishing/publishing"))
const Sessions = dynamic(() => import("./sessions/sessions"))
const PublishedBooks = dynamic(() => import("./published-books/published-books"))
const LatestPublished = dynamic(() => import("./latest-published/latest-published"))
const Interviews = dynamic(() => import("./interviews/interviews"))
const Contact = dynamic(() => import("./contact/contact"))
const Billboard = dynamic(() => import("./billborad/billboard"))

export {
    Hero,
    Services,
    TrendingPodcast,
    Publishing,
    Sessions,
    PublishedBooks,
    LatestPublished,
    Interviews,
    Contact,
    Billboard,
}