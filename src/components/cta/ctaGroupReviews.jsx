// Components
import { CTA } from "@/components"

export function CTAGroupReviews() {
    return (
        <>
            <CTA icon="chevron-white" css="hover:bg-black hover:border hover:border-white hover:[boxShadow:0px_5px_15px_rgba(255,_118,_117,_0.3)] bg-gradient hover:bg-none text-white !rounded-full" text="View case study" />
            <CTA icon="chevron-pink" css="bg-transparent border-2 text-black border-black hover:text-pink hover:border-pink [&>img]:brightness-0 [&>img]:invert-0 [&:hover>img]:brightness-[inherit] [&:hover>img]:invert !rounded-full" text="Clutch review" />
        </>
    )
};