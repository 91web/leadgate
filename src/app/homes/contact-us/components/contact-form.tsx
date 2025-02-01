import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";

import { Phone } from "@mui/icons-material";
import ContactHero2 from "../../../../assets/img/contactus-hero3.png";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState } from "react";

export default function ContactForm() {
    const [formDetails, setFormDetails] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      agree: false,
    });
  
    const handleChange = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
    <Container maxWidth="lg">
      {/* Contact Info Cards */}
      <Box sx={{ my: { xs: 0, md: 9 } }}>
        <Grid2 container spacing={4}>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                p: 2,
                bgcolor: "#F2F4F7",
                borderRadius: 1,
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 2,
                }}
              >
                <Typography
                  variant="h6"
                  color="#344054"
                  sx={{
                    fontFamily: "inter",
                    fontWeight: "bold",
                    fontSize: { xs: "16px", md: "18px" },
                  }}
                >
                  Send us a mail
                </Typography>
                <MarkunreadIcon color="primary" sx={{ color: "#344054" }} />
              </Box>
              <Typography
                variant="body2"
                color="text.secondary"
                gutterBottom
                mb={2}
                fontSize="14px"
                fontWeight="regular"
              >
                Speak to our friendly support staff
              </Typography>
              <Typography variant="body2" fontSize="14px" fontWeight="medium">
                support@leadgategroup.com
              </Typography>
            </Box>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                p: 2,
                bgcolor: "#F2F4F7",
                borderRadius: 1,
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 2,
                }}
              >
                <Typography
                  variant="h6"
                  color="#344054"
                  sx={{
                    fontFamily: "inter",
                    fontWeight: "bold",
                    fontSize: { xs: "16px", md: "18px" },
                  }}
                >
                  Visit us
                </Typography>
                <FmdGoodIcon color="primary" sx={{ color: "#344054" }} />
              </Box>
              <Typography
                variant="body2"
                color="text.secondary"
                gutterBottom
                mb={2}
                fontSize="14px"
                fontWeight="regular"
              >
                Visit our physical offices here.
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                gutterBottom
                fontSize="14px"
                fontWeight="medium"
              >
                Suite M206/ M207, Second Floor, Middle Block, Millennium
                Builders&apos; Plaza, Plot 251 Herbert Macaulay Way, Central
                Business District, Abuja, FCT, Nigeria
              </Typography>
            </Box>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                p: 2,
                bgcolor: "#F2F4F7",
                borderRadius: 1,
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 2,
                }}
              >
                <Typography
                  variant="h6"
                  color="#344054"
                  sx={{
                    fontFamily: "inter",
                    fontWeight: "bold",
                    fontSize: { xs: "16px", md: "18px" },
                  }}
                >
                  Call us
                </Typography>
                <Phone color="primary" sx={{ color: "#344054" }} />
              </Box>
              <Typography
                variant="body2"
                color="text.secondary"
                gutterBottom
                mb={2}
                fontSize="14px"
                fontWeight="regular"
              >
                Mon - Fri from 8am - 5pm
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                gutterBottom
                fontSize="14px"
                fontWeight="medium"
              >
                +234 909 935 2438
              </Typography>
            </Box>
          </Grid2>
        </Grid2>
      </Box>

      {/* Contact Form Section */}
      <Box mx={"5%"}>
        <Grid2 container spacing={8}>
          <Grid2 size={{ xs: 12, md: 5 }}>
            <Box>
              <Box
                component="img"
                src={ContactHero2.src}
                alt="Contact team"
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 2,
                  display: { xs: "none", md: "flex" },
                }}
              />
            </Box>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 7 }}>
            <Box>
              <Typography
                variant="h4"
                gutterBottom
                textAlign={"center"}
                sx={{
                  fontFamily: "lora",
                  fontWeight: "medium",
                  fontSize: "24px",
                }}
              >
                Want to make further enquiries?
              </Typography>
              <Typography
                variant="h4"
                gutterBottom
                textAlign={"center"}
                sx={{
                  fontFamily: "inter",
                  color: "#344054",
                  fontWeight: "regular",
                  fontSize: "16px",
                }}
              >
                Our friendly team would love to hear from you.
              </Typography>

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
                        name="phone"
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
                                    "& fieldset": { border: "none" },
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
                        name="message"
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
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Container>
  );
}


