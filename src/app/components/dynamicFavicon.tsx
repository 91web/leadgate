"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const DynamicFavicon = () => {
  const pathname = usePathname();

  useEffect(() => {
    const updateFavicon = () => {
      const favicon = document.querySelector(
        "link[rel*='icon']"
      ) as HTMLLinkElement;

      // Define your favicon mapping based on routes
      if (pathname.startsWith("/homes")) {
        favicon.href = "/favicon-home.ico";
      } else if (pathname.startsWith("/construction")) {
        favicon.href = "/favicon-construction.ico";
      } else if (pathname.startsWith("/pharmaceuticals")) {
        favicon.href = "/favicon-pharmaceutical.ico";
      } else {
        favicon.href = "/favicon.ico"; // default favicon
      }
    };

    updateFavicon();
  }, [pathname]);

  return null;
};

export default DynamicFavicon;
