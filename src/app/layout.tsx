// import { Geist, Geist_Mono } from "next/font/google";
import "./themes/globals.css";
import "@fontsource/lora";
import "@fontsource/inter";
import { Metadata } from "next";
import DynamicFavicon from "./components/dynamicFavicon";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: {
    template: "%s | Leadgate Group",
    default: "Leadgate Group",
  },
  description:
    "Leadgate Group is a prominent group of companies centered around construction, real estate and pharmaceuticals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning
      >
        <DynamicFavicon />
        {children}
      </body>
    </html>
  );
}
