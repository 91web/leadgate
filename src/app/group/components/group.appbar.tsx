import Box from "@mui/material/Box";
import {
  Dispatch,
  FC,
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
import ArrowDropUp from "@mui/icons-material/ArrowDropUp";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import { usePathname, useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import ArrowOut from "@/assets/svg/arrow-square-out.svg";
import Popper from "@mui/material/Popper";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

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
  const [showHomeNav, setShowHomeNav] = useState(false);
  const [popperOpen, setPopperOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedPage, setSelectedPage] = useState<NavDataType | null>(null);

  // Toggle Popper
  const handlePopperOpen = (
    event: React.MouseEvent<HTMLElement>,
    page: NavDataType
  ) => {
    if (anchorEl === event.currentTarget && popperOpen) {
      handlePopperClose(); // toggle off
    } else {
      setAnchorEl(event.currentTarget);
      setSelectedPage(page);
      setPopperOpen(true);
    }
  };

  // Close Popper
  const handlePopperClose = () => {
    setPopperOpen(false);
    setAnchorEl(null);
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const popperElement = document.getElementById("nav-popper");
      if (
        popperElement &&
        !popperElement.contains(event.target as Node) &&
        anchorEl &&
        !anchorEl.contains(event.target as Node)
      ) {
        handlePopperClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [anchorEl]);

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
              <Toolbar
                sx={{
                  bgcolor: "#101828",
                  alignItems: "self-end",
                  minHeight: { xs: 0, md: "auto" },
                  py: { xs: 0, md: 1 },
                  px: 0,
                }}
              >
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
          <Toolbar>
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
                        <Link
                          href={""}
                          onClick={(e) => {
                            e.preventDefault(); // prevent anchor navigation
                            handlePopperOpen(e, page);
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
                            fontSize={"1rem"}
                            display={"flex"}
                            flexDirection={"row"}
                          >
                            <span style={{ marginTop: "3px" }}>
                              {page?.name}
                            </span>
                            {page.subNav?.length > 0 && (
                              <>
                                {anchorEl &&
                                selectedPage?.id === page.id &&
                                popperOpen ? (
                                  <ArrowDropUp />
                                ) : (
                                  <ArrowDropDown />
                                )}
                              </>
                            )}
                          </Typography>
                        </Link>
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
                        ) : null}
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
                      p: 1,
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
                    {pathname.split("/").includes("pharmaceuticals")
                      ? "Contact Us"
                      : "Get in touch"}
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

      {/* Popper for Sub-Navigation */}
      <Popper
        id="nav-popper"
        open={popperOpen}
        anchorEl={anchorEl}
        placement="bottom-start"
        sx={{
          zIndex: 1,
          width: "200px",
          marginTop: "8px",
        }}
        modifiers={[
          {
            name: "offset",
            options: {
              offset: [0, 25],
            },
          },
        ]}
      >
        <Paper
          elevation={2}
          sx={{
            width: "100%",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <List>
            {selectedPage?.subNav?.map((subPage) => (
              <ListItem
                key={subPage.id}
                sx={{
                  py: 1,
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                  },
                }}
                onClick={() => {
                  window.location.href = `${subPage.url}`;
                  handlePopperClose();
                }}
              >
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        textTransform: "capitalize",
                        color: "#344054",
                        fontWeight: selectedPage?.active ? 600 : "normal",
                        fontSize: "0.9rem",
                      }}
                    >
                      {subPage?.name}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Popper>
    </Box>
  );
};
