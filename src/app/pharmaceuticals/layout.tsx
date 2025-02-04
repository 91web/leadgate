import { Metadata } from "next";
import AppPharmacyLayout from "./layout.client";
import DynamicFavicon from "../components/dynamicFavicon";

export const metadata: Metadata = {
  title: "Pharmaceuticals",
  description:
    "Leadgate Pharmaceuticals, committed to improving health outcomes",
  openGraph: {
    title: "Pharmaceuticals - Leadgate Group",
    description:
      "Leadgate Pharmaceuticals, committed to improving health outcomes",
    images: ["/assets/img/Leadgate Pharmaceuticals Logo.png"],
  },
};

export default function PharmaceuticalsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppPharmacyLayout>
      <DynamicFavicon />
      {children}
    </AppPharmacyLayout>
  );
}
