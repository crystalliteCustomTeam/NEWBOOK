import dynamic from "next/dynamic"

import { NextButton, PrevButton, usePrevNextButtons } from "./sliders/sliderarrows/sliderarrows"
const AutoScrollSlider = dynamic(() => import('./sliders/autoscroll/autoscroll'))
const AutoPlaySlider = dynamic(() => import('./sliders/autoplay/autoplay'))
const Counter = dynamic(() => import('./Counter'))
const FrontEndForm = dynamic(() => import('./FrontEndForm'))
const CTA = dynamic(() => import("./cta/cta"))
import { CTAGroupDark } from "./cta/ctaGroupDark"
import { CTAGroupLight } from "./cta/ctaGroupLight"
import { CTAGroupReviews } from "./cta/ctaGroupReviews"
const FancyBox = dynamic(() => import("./FancyBox"))
const Popup = dynamic(() => import("./website/popup/popup"))
const Awards = dynamic(() => import("./website/awards/awards"))
const WhyChoose = dynamic(() => import("./website/why-choose/why-choose"))
const Reviews = dynamic(() => import("./website/reviews/reviews"))
const TrustedClients = dynamic(() => import("./website/trusted-clients/trusted-clients"))
const Traditional = dynamic(() => import("./website/traditional/traditional"))
const Banner1 = dynamic(() => import("./website/banner-cta/banner-cta"))
const Header = dynamic(() => import("./website/header/header"))
const Footer = dynamic(() => import("./website/footer/footer"))
const MobileRender = dynamic(() => import("./MobileRender"))


export {
  Header,
  CTA,
  CTAGroupDark,
  CTAGroupLight,
  CTAGroupReviews,
  AutoScrollSlider,
  AutoPlaySlider,
  NextButton,
  PrevButton,
  usePrevNextButtons,
  Counter,
  Footer,
  FrontEndForm,
  WhyChoose,
  Awards,
  Reviews,
  TrustedClients,
  Traditional,
  Banner1,
  FancyBox,
  Popup,
  MobileRender
}
