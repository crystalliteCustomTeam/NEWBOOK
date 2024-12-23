// Next
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./hero/hero"));
const AwardWinning = dynamic(() => import("./award-winning/award-winning"));
const ConvertTypes = dynamic(() => import("./convert-types/convert-types"));
const FocusedAgency = dynamic(() => import("./focused-agency/focused-agency"));
const Solutions = dynamic(() => import("./solutions/solutions"));
const PowerfulFeatures = dynamic(() => import("./powerful-features/powerful-features"));
const SaveTime = dynamic(() => import("./save-time/save-time"));
const Platforms = dynamic(() => import("./platforms/platforms"));
export {
  Hero,
  AwardWinning,
  ConvertTypes,
  FocusedAgency,
  Solutions,
  PowerfulFeatures,
  SaveTime,
  Platforms
};
