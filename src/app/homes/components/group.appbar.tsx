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
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Grid2 from "@mui/material/Grid2";
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

interface LGroupAppBarComponentProps {
  openDrawer: boolean;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
  navState: NavDataType[];
  eleBar: number;
  logo: StaticImageData;
}
export const GroupAppBarComponent: FC<LGroupAppBarComponentProps> = (props) => {
  const { openDrawer, setOpenDrawer, navState, logo } = props;
  const [openProjectModal, setOpenProjectModal] = useState<boolean>(false);
  const [openPartnerModal, setOpenPartnerModal] = useState<boolean>(false);
  const [openDeveloperModal, setOpenDeveloperModal] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [showHomeNav, setShowHomeNav] = useState(false);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
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

  const togglePartnerModal = () => {
    setOpenPartnerModal(!openPartnerModal);
    setOpenPartnerModal(!openPartnerModal);
  };
  const toggleProjectModal = () => {
    setOpenProjectModal(!openProjectModal);
  };

  const setDeveloperModal = () => {
    setOpenPartnerModal(!openPartnerModal);
    setOpenDeveloperModal(!openDeveloperModal);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
                height={60}
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
                            onClick={(e) => {
                              if (page.name === "Projects") {
                                toggleProjectModal();
                                e.preventDefault();
                              } else if (page.name === "Partners") {
                                togglePartnerModal();
                                e.preventDefault();
                              } else {
                                window.location.href = `/${
                                  pathname.split("/")[1]
                                }${page.url}`;
                              }
                            }}
                            href={
                              page.name === "Projects"
                                ? "#"
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
                      bgcolor:
                        pathname.split("/").includes("homes") ||
                        pathname.split("/").includes("construction")
                          ? "#AE883B"
                          : "",
                      color: "#ffff",
                    }}
                    variant="contained"
                    onClick={() => {
                      const segment = pathname.split("/")[1];
                      const isConstructionPath = segment === "construction";
                      const targetPath = isConstructionPath
                        ? "#contact"
                        : `/${segment}/contact-us`;

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
            <Drawer
              anchor="right"
              open={openProjectModal}
              onClose={toggleProjectModal}
              ModalProps={{
                BackdropProps: { style: { backgroundColor: "transparent" } },
              }}
              sx={{
                zIndex: 2000,
                "& .MuiDrawer-paper": {
                  height: "auto",
                  width: "20%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  top: "20%",
                  right: "20%",
                  borderRadius: "10px",
                },
              }}
            >
              <Box>
                <List>
                  <Box display="flex" flexDirection="column" gap={2} p={2}>
                    <Box>
                      <Box>
                        <Link href="/homes/project" color="inherit">
                          <Typography>Ornate</Typography>
                        </Link>
                      </Box>
                      <Divider />
                      <Box mt={2}>
                        <Link href="/homes/project" color="inherit">
                          <Typography>Campari</Typography>
                        </Link>
                      </Box>
                      <Divider />
                      <Box mt={2}>
                        <Link href="/homes/project" color="inherit">
                          <Typography>Valentino</Typography>
                        </Link>
                      </Box>
                      <Divider />
                      <Box mt={2}>
                        <Link href="/homes/project" color="inherit">
                          <Typography>Florida</Typography>
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                </List>
              </Box>
            </Drawer>
            <Drawer
              anchor="right"
              open={openPartnerModal}
              onClose={togglePartnerModal}
              ModalProps={{
                BackdropProps: { style: { backgroundColor: "transparent" } },
              }}
              sx={{
                zIndex: 2000,
                "& .MuiDrawer-paper": {
                  height: "auto",
                  width: "20%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  top: "20%",
                  right: "20%",
                  borderRadius: "10px",
                },
              }}
            >
              <Box>
                <List>
                  <Box display="flex" flexDirection="column" gap={2} p={2}>
                    <Box>
                      <Box>
                        <Button
                          onClick={setDeveloperModal}
                          sx={{ color: "#000" }}
                        >
                          Become a Developer
                        </Button>
                      </Box>
                      <Divider />
                      <Box mt={2}>
                        <Button
                          onClick={setDeveloperModal}
                          sx={{ color: "#000" }}
                        >
                          Become a Realtor
                        </Button>
                      </Box>
                      <Divider />
                      <Box mt={2}>
                        <Button
                          onClick={setDeveloperModal}
                          sx={{ color: "#000" }}
                        >
                          Become an Inventor
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </List>
              </Box>
            </Drawer>
          </Toolbar>
        </Container>
      </AppBar>
      <Dialog
        fullScreen={fullScreen}
        open={openDeveloperModal}
        onClose={setDeveloperModal}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <DialogContentText>
            <Box>
              <Box py={{ xs: 5, md: 5 }}>
                <Container maxWidth="lg">
                  <Box mx={"5%"}>
                    <Grid2 container spacing={4}>
                      <Typography
                        sx={{
                          fontFamily: "lora",
                          fontWeight: "bold",
                          fontSize: "24px",
                          mb: 2,
                        }}
                      >
                        Become a Developer
                      </Typography>

                      {/* Form Section */}
                      <Box component="form" sx={{ mt: 4 }}>
                        <Grid2 container spacing={2}>
                          <Grid2 size={{ xs: 12, md: 6 }}>
                            <FormControl fullWidth>
                              <FormLabel>First Name</FormLabel>
                              <TextField
                                name="firstName"
                                onChange={handleChange}
                                fullWidth
                                placeholder="First name"
                                variant="outlined"
                              />
                            </FormControl>
                          </Grid2>
                          <Grid2 size={{ xs: 12, md: 6 }}>
                            <FormControl fullWidth>
                              <FormLabel>Last Name</FormLabel>
                              <TextField
                                fullWidth
                                name="lastName"
                                onChange={handleChange}
                                placeholder="Last name"
                                variant="outlined"
                              />
                            </FormControl>
                          </Grid2>
                          <Grid2 size={{ xs: 12, md: 6 }}>
                            <FormControl fullWidth>
                              <FormLabel>Email</FormLabel>
                              <TextField
                                name="email"
                                onChange={handleChange}
                                fullWidth
                                placeholder="@gmail.com"
                                variant="outlined"
                                type="email"
                              />
                            </FormControl>
                          </Grid2>
                          <Grid2 size={{ xs: 12, md: 6 }}>
                            <FormControl fullWidth>
                              <FormLabel>Phone Number</FormLabel>
                              <TextField
                                fullWidth
                                name="phoneNumber"
                                onChange={handleChange}
                                variant="outlined"
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
                          </Grid2>
                          <Grid2 size={12}>
                            <FormControl fullWidth>
                              <FormLabel>Message</FormLabel>
                              <TextField
                                onChange={handleChange}
                                fullWidth
                                multiline
                                rows={4}
                                variant="outlined"
                              />
                            </FormControl>
                          </Grid2>
                          <Grid2 size={12} sx={{ textAlign: "left" }}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  name="agree"
                                  onChange={handleCheckboxChange}
                                />
                              }
                              label="You agree to our friendly privacy policy."
                            />
                          </Grid2>
                          <Grid2 size={12}>
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
                          </Grid2>
                        </Grid2>
                      </Box>
                    </Grid2>
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
