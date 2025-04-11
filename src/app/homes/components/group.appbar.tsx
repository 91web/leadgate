"use client";

import React, { Dispatch, FC, MouseEvent, Fragment, SetStateAction, useState, useEffect } from "react";
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
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Select from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import DialogContent from "@mui/material/DialogContent/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Popper from "@mui/material/Popper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Paper from "@mui/material/Paper";
import Close from "@mui/icons-material/Close";
import Box from "@mui/material/Box";

interface LGroupAppBarComponentProps {
  openDrawer: boolean;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
  navState: NavDataType[];
  eleBar: number;
  logo: StaticImageData;
}

export const GroupAppBarComponent: FC<LGroupAppBarComponentProps> = (props) => {
  const { openDrawer, setOpenDrawer, navState, logo } = props;
  const [openDeveloperModal, setOpenDeveloperModal] = useState<boolean>(false);
  const [projectAnchorEl, setProjectAnchorEl] = useState<null | HTMLElement>(null);
  const [partnerAnchorEl, setPartnerAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [showHomeNav, setShowHomeNav] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });

  const open = Boolean(anchorEl);
  const projectOpen = Boolean(projectAnchorEl);
  const partnerOpen = Boolean(partnerAnchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProjectClick = (event: MouseEvent<HTMLElement>) => {
    setProjectAnchorEl(event.currentTarget);
  };

  const handlePartnerClick = (event: MouseEvent<HTMLElement>) => {
    setPartnerAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setProjectAnchorEl(null);
    setPartnerAnchorEl(null);
  };

  useEffect(() => {
    if (!pathname.split("/").includes("group")) {
      setShowHomeNav(true);
    } else {
      setShowHomeNav(false);
    }
  }, [pathname]);

  const setDeveloperModal = () => {
    setOpenDeveloperModal(!openDeveloperModal);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [name]: checked,
    }));
  };

  const handleSubmit = () => {
    console.log(formDetails);
  };

  const projectItems = [
    { name: "Ornate", url: "/homes/project/1/Ornate" }, // ID "1" for Ornate
    { name: "Lead City", url: "/homes/project/2/Leadcity" }, // ID "2" for leadcity
    { name: "Emerald", url: "/homes/project/3/Emerald" }, // ID "3" for emerald
  ];

  const partnerItems = [
    { name: "Become a Developer", action: setDeveloperModal },
    { name: "Become a Realtor", action: setDeveloperModal },
    { name: "Become an Investor", action: setDeveloperModal },
  ];

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
                <Box component={"a"} href="/group" display={"flex"} gap={1} pb={1}>
                  <Typography>Go to Leadgate Groups</Typography>
                  <Image src={ArrowOut} alt={"arrow out"} style={{ margin: "2px 0px" }} />
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
            <Box sx={{ display: { xs: "none", md: "flex" } }} justifyContent={"end"}>
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
                            <span style={{ marginTop: "3px" }}>{page?.name}</span>
                            {page.subNav && page.subNav?.length > 0 && <>{open ? <ArrowDropUp /> : <ArrowDropDown />}</>}
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
                        {pathname.split("/")[1] !== "group" && page.name !== "Contact Us" ? (
                          <Box
                            sx={{
                              mx: 2,
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                            }}
                            onClick={(e) => {
                              if (page.name === "Projects") {
                                handleProjectClick(e);
                              } else if (page.name === "Partners") {
                                handlePartnerClick(e);
                              } else {
                                window.location.href = `/${pathname.split("/")[1]}${page.url}`;
                              }
                            }}
                          >
                            <Typography
                              textTransform="capitalize"
                              lineHeight={1.2}
                              color={"#344054"}
                              fontWeight={page.active ? 600 : "normal"}
                              fontSize={"1rem"}
                            >
                              {page?.name}
                            </Typography>
                            {(page.name === "Projects" || page.name === "Partners") && (
                              <Box
                                sx={{
                                  ml: 0.5,
                                  display: "flex",
                                  color: "#344054",
                                }}
                              >
                                {page.name === "Projects" ? (
                                  projectOpen ? (
                                    <ArrowDropUp />
                                  ) : (
                                    <ArrowDropDown />
                                  )
                                ) : partnerOpen ? (
                                  <ArrowDropUp />
                                ) : (
                                  <ArrowDropDown />
                                )}
                              </Box>
                            )}
                          </Box>
                        ) : pathname.split("/")[1] === "group" ? (
                          <Link
                            href={
                              pathname.split("/")[1] === "construction"
                                ? `${page.url}`
                                : `/${pathname.split("/")[1]}${page.url}`
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

              {/* Project Popper */}
              <Popper
                open={projectOpen}
                anchorEl={projectAnchorEl}
                placement="bottom-start"
                sx={{
                  zIndex: 1300,
                  mt: 1,
                  '&[data-popper-placement*="bottom"]': {
                    marginTop: "8px",
                  },
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
                <ClickAwayListener onClickAway={handleClose}>
                  <Paper
                    elevation={0}
                    sx={{
                      minWidth: 150,
                      borderRadius: "8px",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      overflow: "hidden",
                    }}
                  >
                    <List disablePadding>
                      {projectItems.map((item, index) => (
                        <Fragment key={item.name}>
                          <MenuItem
                            onClick={() => {
                              router.push(item.url);
                              handleClose();
                            }}
                            sx={{
                              p: 1,
                              "&:hover": {
                                backgroundColor: "#f5f5f5",
                              },
                            }}
                          >
                            <Typography>{item.name}</Typography>
                          </MenuItem>
                          {index < projectItems.length - 1 && <Divider sx={{ my: 0 }} />}
                        </Fragment>
                      ))}
                    </List>
                  </Paper>
                </ClickAwayListener>
              </Popper>

              {/* Partner Popper */}
              <Popper
                open={partnerOpen}
                anchorEl={partnerAnchorEl}
                placement="bottom-start"
                sx={{
                  zIndex: 1300,
                  mt: 1,
                  '&[data-popper-placement*="bottom"]': {
                    marginTop: "8px",
                  },
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
                <ClickAwayListener onClickAway={handleClose}>
                  <Paper
                    elevation={0}
                    sx={{
                      minWidth: 200,
                      borderRadius: "8px",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      overflow: "hidden",
                    }}
                  >
                    <List disablePadding>
                      {partnerItems.map((item, index) => (
                        <Fragment key={item.name}>
                          <MenuItem
                            onClick={() => {
                              item.action();
                              handleClose();
                            }}
                            sx={{
                              p: 1.5,
                              "&:hover": {
                                backgroundColor: "#f5f5f5",
                              },
                            }}
                          >
                            <Typography>{item.name}</Typography>
                          </MenuItem>
                          {index < partnerItems.length - 1 && <Divider sx={{ my: 0 }} />}
                        </Fragment>
                      ))}
                    </List>
                  </Paper>
                </ClickAwayListener>
              </Popper>

              {showHomeNav && (
                <Box display={{ xs: "none", md: "block" }}>
                  <Button
                    aria-label="contact us"
                    sx={{
                      borderRadius: "8px",
                      textTransform: "capitalize",
                      p: 1,
                      fontSize: "1rem",
                      bgcolor:
                        pathname.split("/").includes("homes") || pathname.split("/").includes("construction")
                          ? "#AE883B"
                          : "",
                      color: "#ffff",
                    }}
                    variant="contained"
                    onClick={() => {
                      const segment = pathname.split("/")[1];
                      const isConstructionPath = segment === "construction";
                      const targetPath = isConstructionPath ? "#contact" : `/${segment}/contact-us`;

                      router.push(targetPath);
                    }}
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

      {/* Developer Dialog */}
      <Dialog
        fullScreen={fullScreen}
        open={openDeveloperModal}
        onClose={setDeveloperModal}
        aria-labelledby="responsive-dialog-title"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pt: "150px",
          pb: { xs: "120px", md: "14px" },
          mx: { xs: "8px", md: "0px" },
        }}
      >
        <DialogContent>
          <DialogContentText component="div">
            <Box>
              <Box py={{ xs: 5, md: 1 }}>
                <Container maxWidth="lg">
                  <Box mx={"5%"}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                      <Typography fontWeight={"bold"} fontSize={"30px"} mb={3} sx={{ whiteSpace: "nowrap" }}>
                        Become a Developer
                      </Typography>
                      <IconButton onClick={setDeveloperModal} sx={{ color: "#000" }}>
                        <Close />
                      </IconButton>
                    </Box>

                    <Box component="form" noValidate autoComplete="off" sx={{ maxWidth: 500, mx: "auto" }}>
                      <Box display="flex" gap={2} mb={2}>
                        <FormControl fullWidth>
                          <FormLabel>First Name</FormLabel>
                          <TextField
                            name="firstName"
                            onChange={handleChange}
                            placeholder="First Name"
                            variant="outlined"
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                borderRadius: "15px",
                              },
                            }}
                          />
                        </FormControl>

                        <FormControl fullWidth>
                          <FormLabel>Last Name</FormLabel>
                          <TextField
                            name="lastName"
                            onChange={handleChange}
                            placeholder="Last Name"
                            variant="outlined"
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                borderRadius: "15px",
                              },
                            }}
                          />
                        </FormControl>
                      </Box>

                      <Box mb={2}>
                        <FormControl fullWidth>
                          <FormLabel>Email</FormLabel>
                          <TextField
                            type="email"
                            name="email"
                            onChange={handleChange}
                            placeholder="Email Address"
                            variant="outlined"
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                borderRadius: "15px",
                              },
                            }}
                          />
                        </FormControl>
                      </Box>

                      <Box mb={2}>
                        <FormControl fullWidth>
                          <FormLabel>Phone Number</FormLabel>
                          <TextField
                            fullWidth
                            name="phoneNumber"
                            onChange={handleChange}
                            variant="outlined"
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                borderRadius: "15px",
                              },
                            }}
                            slotProps={{
                              input: {
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <Select
                                      defaultValue="NG"
                                      variant="outlined"
                                      sx={{
                                        mr: 1,
                                        "& fieldset": {
                                          border: "none",
                                        },
                                      }}
                                    >
                                      <MenuItem value="NG">NG</MenuItem>
                                      <MenuItem value="US">US</MenuItem>
                                      <MenuItem value="UK">UK</MenuItem>
                                    </Select>
                                  </InputAdornment>
                                ),
                              },
                            }}
                          />
                        </FormControl>
                      </Box>

                      <Box mb={2}>
                        <FormControlLabel
                          control={<Checkbox name="agree" onChange={handleCheckboxChange} />}
                          label="You agree to our friendly privacy policy."
                        />
                      </Box>

                      <Box mt={2}>
                        <Button
                          fullWidth
                          variant="contained"
                          size="large"
                          onClick={handleSubmit}
                          sx={{
                            textTransform: "none",
                            bgcolor: "#AE883B",
                            "&:hover": { bgcolor: "#965F2A" },
                          }}
                        >
                          Send Message
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Container>
              </Box>
            </Box>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Box>
  );
};
