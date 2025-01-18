import Box from "@mui/material/Box";
import {
  Dispatch,
  FC,
  MouseEvent,
  Fragment,
  SetStateAction,
  useState,
} from "react";
import { NavDataType } from "./static-data/data";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import LGroupLogo from "@/assets/img/Leadgate Group Logo.png";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@/assets/svg/tabler_menu.svg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropUp from "@mui/icons-material/ArrowDropUp";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";

interface LGroupAppBarComponentProps {
  openDrawer: boolean;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
  navState: NavDataType[];
  eleBar: number;
}
export const GroupAppBarComponent: FC<LGroupAppBarComponentProps> = (props) => {
  const { openDrawer, setOpenDrawer, navState } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        elevation={0}
        position="fixed"
        sx={{
          backgroundColor: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Container maxWidth={"lg"}>
          <Toolbar sx={{ py: { md: 1 }, px: { xs: 0 } }}>
            <Box pt={1}>
              <Image
                height={40}
                src={LGroupLogo}
                alt={"LeadGate Group Logo"}
                priority={true}
                style={{ cursor: "pointer" }}
                onClick={() => (window.document.location.href = "/group")}
              />
            </Box>
            <Box flexGrow={1} />
            <Box
              sx={{ display: { xs: "none", md: "flex" } }}
              justifyContent={"end"}
            >
              {navState &&
                navState.map((page) => (
                  <Fragment key={page.id}>
                    {page.subNav ? (
                      <>
                        <Link href={""} onClick={handleClick}>
                          <Typography
                            sx={{
                              mx: 2,
                              textTransform: "capitalize",
                            }}
                            lineHeight={1.2}
                            color={"#344054"}
                            fontWeight={page.active ? 600 : "normal"}
                            fontSize={"0.9rem"}
                            display={"flex"}
                            flexDirection={"row"}
                          >
                            <span style={{ marginTop: "3px" }}>
                              {page?.name}
                            </span>
                            {page.subNav && page.subNav?.length > 0 && (
                              <>{open ? <ArrowDropUp /> : <ArrowDropDown />}</>
                            )}
                          </Typography>
                        </Link>
                        <Menu
                          anchorEl={anchorEl}
                          id="our-core-divisions-menu"
                          open={open}
                          onClose={handleClose}
                          onClick={handleClose}
                          slotProps={{
                            paper: {
                              elevation: 0,
                              sx: {
                                overflow: "visible",
                                // filter:
                                //   "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                mt: 2.5,
                                "& .MuiAvatar-root": {
                                  width: 32,
                                  height: 32,
                                  ml: -0.5,
                                  mr: 1,
                                },
                                "&::before": {
                                  content: '""',
                                  display: "block",
                                  position: "absolute",
                                  top: 0,
                                  right: 14,
                                  width: 10,
                                  height: 10,
                                  bgcolor: "background.paper",
                                  transform: "translateY(-50%) rotate(45deg)",
                                  zIndex: 0,
                                },
                              },
                            },
                          }}
                          transformOrigin={{
                            horizontal: "right",
                            vertical: "top",
                          }}
                          anchorOrigin={{
                            horizontal: "right",
                            vertical: "bottom",
                          }}
                        >
                          {page.subNav.map((subPage) => (
                            <MenuItem
                              key={subPage.id}
                              onClick={() => {
                                window.document.location.href = `${subPage.url}`;
                              }}
                              sx={{
                                bgcolor: "none",
                              }}
                            >
                              <Typography
                                sx={{
                                  mx: 2,
                                  textTransform: "capitalize",
                                }}
                                lineHeight={1.2}
                                color={"#344054"}
                                fontWeight={page.active ? 600 : "normal"}
                                fontSize={"0.9rem"}
                              >
                                {subPage?.name}
                              </Typography>
                            </MenuItem>
                          ))}
                        </Menu>
                      </>
                    ) : (
                      <Link key={page?.id} href={`/group${page.url}` as string}>
                        <Typography
                          sx={{
                            mx: 2,
                            textTransform: "capitalize",
                          }}
                          marginTop={"3px"}
                          lineHeight={1.2}
                          color={"#344054"}
                          fontWeight={page.active ? 600 : "normal"}
                          fontSize={"0.9rem"}
                        >
                          {page?.name}
                        </Typography>
                      </Link>
                    )}
                  </Fragment>
                ))}
            </Box>
            <Box display={{ xs: "block", md: "none" }}>
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{
                  ml: 2,
                  display: { xs: "block", md: "none" },
                  color: "var(--app-color-normal)",
                }}
                onClick={() => setOpenDrawer(!openDrawer)}
              >
                <Image src={MenuIcon} alt={"menu"} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
