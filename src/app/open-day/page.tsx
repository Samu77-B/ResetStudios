import type { Metadata } from "next";
import { OpenDayLanding } from "@/components/open-day/OpenDayLanding";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Free Open Day | ${SITE.name}`,
  description:
    "Register for free access at the Reset Studios Waltham Abbey open day on Sunday 8 November. Tour the gym, meet the team, and claim launch offers.",
};

export default function OpenDayPage() {
  return <OpenDayLanding />;
}
