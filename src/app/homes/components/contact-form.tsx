
import { useState } from "react";
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
import CareerHero2 from "../../../assets/img/form-home-event.png";


export default function CareerForm() {
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
    <Box py={{ xs: 5, md: 10 }}>
      <Container maxWidth="lg">
        {/* Contact Info Cards */}

        {/* Contact Form Section */}
        <Box mx={"5%"}>
          <Grid2 container spacing={4}>
            <Grid2 size={{ xs: 12, md: 7 }}>
              <Box sx={{ textAlign: "left", mr: { xs: 0, md: 8 } }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "lora",
                    fontWeight: "bold",
                    fontSize: "24px",
                    mb: 2,
                  }}
                >
                  Get in touch
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "inter",
                    color: "#344054",
                    fontWeight: "regular",
                    fontSize: "16px",
                    mb: 2,
                  }}
                >
                  Our friendly team would love to hear from you.
                </Typography>

                <Box component="form">
                  <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                      <Typography
                        sx={{
                          fontFamily: "inter",
                          color: "#344054",
                          lineHeight: 1.8,
                          mb: 1,
                          fontSize: "16px",
                          textAlign: "left",
                          fontWeight: "regular",
                        }}
                      >
                        First Name
                      </Typography>
                      <TextField
                        name="firstName"
                        onChange={handleChange}
                        fullWidth
                        placeholder="First name"
                        variant="outlined"
                      />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                      <Typography
                        sx={{
                          fontFamily: "inter",
                          color: "#344054",
                          lineHeight: 1.8,
                          mb: 1,
                          fontSize: "16px",
                          textAlign: "left",
                          fontWeight: "regular",
                        }}
                      >
                        Last Name
                      </Typography>
                      <TextField
                        name="lastName"
                        onChange={handleChange}
                        fullWidth
                        placeholder="Last name"
                        variant="outlined"
                      />
                    </Grid2>
                    <Grid2 size={12}>
                      <Typography
                        sx={{
                          fontFamily: "inter",
                          color: "#344054",
                          lineHeight: 1.8,
                          mb: 1,
                          fontSize: "16px",
                          textAlign: "left",
                          fontWeight: "regular",
                        }}
                      >
                        Email
                      </Typography>
                      <TextField
                        fullWidth
                        name="email"
                        onChange={handleChange}
                        placeholder="@gmail.com"
                        variant="outlined"
                        type="email"
                      />
                    </Grid2>
                    <Grid2 size={12}>
                      <Typography
                        sx={{
                          fontFamily: "inter",
                          color: "#344054",
                          lineHeight: 1.8,
                          mb: 1,
                          fontSize: "16px",
                          textAlign: "left",
                          fontWeight: "regular",
                        }}
                      >
                        Phone Number
                      </Typography>
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
                    </Grid2>
                    <Grid2 size={12}>
                      <Typography
                        sx={{
                          fontFamily: "inter",
                          color: "#344054",
                          lineHeight: 1.8,
                          mb: 1,
                          fontSize: "16px",
                          textAlign: "left",
                          fontWeight: "regular",
                        }}
                      >
                        Message
                      </Typography>
                      <TextField
                        fullWidth
                        name="message"
                        onChange={handleChange}
                        multiline
                        rows={3}
                        variant="outlined"
                      />
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
                        onClick={handleSubmit}
                        variant="contained"
                        size="large"
                        sx={{
                          textTransform: "none",
                          bgcolor: "#AE883B",
                          "&:hover": { bgcolor: "#936D30" },
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid2>
                  </Grid2>
                </Box>
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 5 }}>
              <Box>
                <Box
                  component="img"
                  src={CareerHero2.src}
                  alt="Contact team"
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 1,
                    display: { xs: "none", md: "flex" },
                  }}
                />
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </Box>
  );
}
