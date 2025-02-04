"use client";
import Box from "@mui/material/Box";
import { GroupAppBarComponent } from "../homes/components/group.appbar";
import { useState } from "react";
import LGroupLogo from "@/assets/img/constructionLogo.png";
import { ConstructionNavData, LGroupFooter, NavDataType } from "../homes/components/static-data/data";
import { GroupDrawerComponent } from "../group/components/group.drawer";
import { LAppFooter } from "../group/components/footer";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Constructions",
//   description: "Leading construction services and projects by Leadgate Group",
//   openGraph: {
//     title: "Constructions - Leadgate Group",
//     description: "Leading construction services and projects by Leadgate Group",
//     images: ["/assets/img/constructionLogoWhite.jpg"],
//   },
// };

const drawerWidth = 240;

const AppConstructionLayout = ({
  children, 
}: {
  children: React.ReactNode;
}) => {
  // const router = useRouter();
    const [openDrawer, setOpenDrawer] = useState(false);
    const [navState, setNavState] = useState(ConstructionNavData);

  const handleNavClick = (pageNav: NavDataType) => {
    // console.log(pageNav);
    const newNavState = navState.map((nav) => {
      if (nav?.subNav) {
        const _nav: NavDataType = {
          ...nav,
          openSub: !nav.openSub,
        };
        nav = _nav;
      } else {
        if (nav?.id === pageNav.id) {
          const _nav: NavDataType = {
            ...nav,
            active: true,
          };
          nav = _nav;
        } else {
          const _nav: NavDataType = {
            ...nav,
            active: false,
          };
          nav = _nav;
        }
      }

      return nav;
    });
    setNavState(newNavState);
  };

  // const scrollToTop = () => {
  //   const c = document.documentElement.scrollTop || document.body.scrollTop;
  //   if (c > 0) {
  //     window.requestAnimationFrame(scrollToTop);
  //     window.scrollTo(0, c - c / 8);
  //   }
  // };
  return (
    <Box position={"relative"}>
      <GroupAppBarComponent
        logo={LGroupLogo}
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
        navState={navState}
        eleBar={0}
      />
      <GroupDrawerComponent
        setOpenDrawer={setOpenDrawer}
        openDrawer={openDrawer}
        navState={navState}
        handleNavClick={handleNavClick}
        drawerWidth={drawerWidth}
      />
      <Box>{children}</Box>
      <LAppFooter footerData={LGroupFooter} />
    </Box>
  );
};

export default AppConstructionLayout;
