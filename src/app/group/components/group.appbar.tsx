import Box from "@mui/material/Box";
import {
  Dispatch,
  FC,
  MouseEvent,
  Fragment,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import { NavDataType } from "./static-data/data";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Image, { StaticImageData } from "next/image";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@/assets/svg/tabler_menu.svg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropUp from "@mui/icons-material/ArrowDropUp";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import { usePathname, useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import ArrowOut from "@/assets/svg/arrow-square-out.svg";

interface LGroupAppBarComponentProps {
  openDrawer: boolean;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
  navState: NavDataType[];
  eleBar: number;
  logo: StaticImageData;
}
export const GroupAppBarComponent: FC<LGroupAppBarComponentProps> = (props) => {
  const { openDrawer, setOpenDrawer, navState, logo } = props;
  const pathname = usePathname();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [showHomeNav, setShowHomeNav] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (!pathname.split("/").includes("group")) {
      setShowHomeNav(true);
    } else {
      setShowHomeNav(false);
    }
  }, [pathname]);

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
        {showHomeNav && (
          <Box sx={{ bgcolor: "#101828" }}>
            <Container maxWidth={"lg"}>
              <Toolbar sx={{ bgcolor: "#101828", alignItems: "self-end" }}>
                <Box flexGrow={1} />
                <Box
                  component={"a"}
                  href="/group"
                  display={"flex"}
                  gap={1}
                  pb={1}
                >
                  <Typography>Go to Leadgate Groups</Typography>
                  <Image
                    src={ArrowOut}
                    alt={"arrow out"}
                    style={{ margin: "2px 0px" }}
                  />
                </Box>
              </Toolbar>
            </Container>
          </Box>
        )}
        <Container maxWidth={"lg"}>
          <Toolbar sx={{ py: { md: 1 }, px: { xs: 0 } }}>
            <Box pt={1}>
              <Image
                height={40}
                src={logo}
                alt={"LeadGate Logo"}
                priority={true}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  router.push(`/${pathname.split("/")[1]}`);
                }}
              />
            </Box>
            <Box flexGrow={1} />
            <Box
              sx={{ display: { xs: "none", md: "flex" } }}
              justifyContent={"end"}
            >
              {navState &&
                navState.map((page) => (
                  <Box key={page.id} py={1.5}>
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
                            fontSize={"1rem"}
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
                      <Fragment key={page?.id}>
                        {pathname.split("/")[1] !== "group" &&
                        page.name !== "Contact Us" ? (
                          <Link
                            href={
                              `/${pathname.split("/")[1]}${page.url}` as string
                            }
                          >
                            <Typography
                              sx={{
                                mx: 2,
                                textTransform: "capitalize",
                              }}
                              marginTop={"3px"}
                              lineHeight={1.2}
                              color={"#344054"}
                              fontWeight={page.active ? 600 : "normal"}
                              fontSize={"1rem"}
                            >
                              {page?.name}
                            </Typography>
                          </Link>
                        ) : pathname.split("/")[1] === "group" ? (
                          <Link
                            href={
                              `/${pathname.split("/")[1]}${page.url}` as string
                            }
                          >
                            <Typography
                              sx={{
                                mx: 2,
                                textTransform: "capitalize",
                              }}
                              marginTop={"3px"}
                              lineHeight={1.2}
                              color={"#344054"}
                              fontWeight={page.active ? 600 : "normal"}
                              fontSize={"1rem"}
                            >
                              {page?.name}
                            </Typography>
                          </Link>
                        ) : (
                          <></>
                        )}
                      </Fragment>
                    )}
                  </Box>
                ))}
              {showHomeNav && (
                <Box display={{ xs: "none", md: "block" }}>
                  <Button
                    aria-label="contact us"
                    sx={{
                      borderRadius: "8px",
                      textTransform: "capitalize",
                      px: 4,
                      py: 1.5,
                      fontSize: "1rem",
                      bgcolor: pathname.split("/").includes("pharmaceuticals")
                        ? "#6B8F24"
                        : "",
                      color: "#ffff",
                    }}
                    variant="contained"
                    onClick={() =>
                      router.push(`/${pathname.split("/")[1]}/contact-us`)
                    }
                  >
                    <>
                      {pathname.split("/").includes("pharmaceuticals")
                        ? "Contact Us"
                        : "Get in touch"}
                    </>
                  </Button>
                </Box>
              )}
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
