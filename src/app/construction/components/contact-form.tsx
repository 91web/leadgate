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

import ContactHero2 from "../../../assets/img/contactus-hero3.png";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";

export default function ContactForm() {
  // State to store form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    countryCode: "NG",
    message: "",
    agreeToPolicy: false,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = event.target as HTMLInputElement;
    const { name, value, type } = target;

   setFormData((prev) => ({
     ...prev,
     [name]: type === "checkbox" ? target.checked : value,
   }));
 };

  // Handle select change
 const handleSelectChange = (event: SelectChangeEvent<string>) => {
   setFormData((prev) => ({
     ...prev,
     countryCode: event.target.value,
   }));
 };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <Container maxWidth="lg" id={"contact"}>
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
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontFamily: "lora",
                  fontWeight: "medium",
                  fontSize: "24px",
                }}
              >
                Want to make further enquiries?
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                sx={{
                  fontFamily: "inter",
                  color: "#344054",
                  fontWeight: "regular",
                  fontSize: "16px",
                }}
              >
                Our friendly team would love to hear from you.
              </Typography>
            </Box>

            <Box component="form" sx={{ mt: 4 }} onSubmit={handleSubmit}>
              <Grid2 container spacing={2}>
                <Grid2 size={{ xs: 12, md: 6 }}>
                  <FormControl fullWidth>
                    <FormLabel>First Name</FormLabel>
                    <TextField
                      fullWidth
                      placeholder="First name"
                      variant="outlined"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }}>
                  <FormControl fullWidth>
                    <FormLabel>Last Name</FormLabel>
                    <TextField
                      fullWidth
                      placeholder="Last name"
                      variant="outlined"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }}>
                  <FormControl fullWidth>
                    <FormLabel>Email</FormLabel>
                    <TextField
                      fullWidth
                      placeholder="@gmail.com"
                      variant="outlined"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }}>
                  <FormControl fullWidth>
                    <FormLabel>Phone Number</FormLabel>
                    <TextField
                      fullWidth
                      variant="outlined"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Select
                              value={formData.countryCode}
                              onChange={handleSelectChange}
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
                      }}
                    />
                  </FormControl>
                </Grid2>

                <Grid2 size={12}>
                  <FormControl fullWidth>
                    <FormLabel>Message</FormLabel>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      variant="outlined"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Grid2>
                <Grid2 size={12} sx={{ textAlign: "left" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="agreeToPolicy"
                        checked={formData.agreeToPolicy}
                        onChange={handleChange}
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
                    type="submit"
                    sx={{
                      my: { xs: 4 },
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
        </Grid2>
      </Box>
    </Container>
  );
}
