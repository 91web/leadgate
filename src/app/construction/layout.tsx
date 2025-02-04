import { Metadata } from "next";
import AppConstructionsLayout from "./layout.client";

export const metadata: Metadata = {
  title: "Constructions",
  description: "Leading construction services and projects by Leadgate Group",
  openGraph: {
    title: "Constructions - Leadgate Group",
    description: "Leading construction services and projects by Leadgate Group",
    images: ["/assets/img/constructionLogoWhite.jpg"],
  },
};

export default function ConstructionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppConstructionsLayout>{children}</AppConstructionsLayout>;
}
