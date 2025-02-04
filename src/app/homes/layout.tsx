import { Metadata } from "next";
import AppHomesLayout from "./layout.client";

export const metadata: Metadata = {
  title: "Homes",
  description:
    "Leadgate Group is a prominent group of companies centered around construction, real estate and pharmaceuticals.",
  openGraph: {
    title: "Homes - Leadgate Group",
    description:
      "Leadgate Group is a prominent group of companies centered around construction, real estate and pharmaceuticals.",
    images: ["/assets/img/LeadgateHomewhite.png"],
  },
};

export default function HomesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppHomesLayout>{children}</AppHomesLayout>;
}
