"use client";
import Box from "@mui/material/Box";
import { useColorScheme, useTheme } from "@mui/material/styles";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  LPharmFooter,
  LPharmNavData,
  NavDataType,
} from "./components/static-data/data";
import useMediaQuery from "@mui/material/useMediaQuery";
import { GroupAppBarComponent } from "../group/components/group.appbar";
import { GroupDrawerComponent } from "../group/components/group.drawer";
import LPharmLogo from "@/assets/img/Leadgate Pharmaceuticals Logo.png";
import { LAppFooter } from "../group/components/footer";
import Toolbar from "@mui/material/Toolbar";
const drawerWidth = 240;

const AppPharmacyLayout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  const theme = useTheme();
  const { setMode } = useColorScheme();
  const pathname = usePathname();
  const [count, setCount] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [navState, setNavState] = useState(LPharmNavData);
  const [hydrated, setHydrated] = useState(false);
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setMode("light");
    setHydrated(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!matches && openDrawer) {
      setOpenDrawer(false);
    }
  }, [matches, openDrawer]);

  useEffect(() => {
    if (!navState && count !== 0) return;
    const navTimer = setTimeout(() => {
      const newNavState = navState.map((nav) => {
        if (nav?.url === "/" && pathname === "/pharmaceuticals") {
          const _nav: NavDataType = {
            ...nav,
            active: true,
          };
          nav = _nav;
        } else if (nav?.url !== "/" && pathname.includes(nav?.url)) {
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
        return nav;
      });
      setCount(1);
      setNavState(newNavState);
    }, 500);
    return () => clearTimeout(navTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, pathname]);

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

  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  };

  useEffect(() => {
    const scrollPage = setTimeout(() => {
      scrollToTop();
      // setHideLoading(true);
    }, 2000);
    return () => {
      clearTimeout(scrollPage);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!hydrated) return null;

  return (
    <Box position={"relative"}>
      <GroupAppBarComponent
        logo={LPharmLogo}
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
      <Box height={"100vh"} overflow={"auto"} component={"main"}>
        <Toolbar sx={{ height: "6vh" }} />
        {children}
        <LAppFooter marginB={0} footerData={LPharmFooter} />
      </Box>
    </Box>
  );
};

export default AppPharmacyLayout;
