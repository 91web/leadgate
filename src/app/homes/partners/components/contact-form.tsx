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
import ContactHero2 from "../../../../assets/img/partner-home-form.png";


export default function ContactForm() {
  return (
    <Container maxWidth="lg">
      {/* Contact Info Cards */}

      {/* Contact Form Section */}
      <Box mx={"5%"}>
        <Grid2 container spacing={8}>
          <Grid2 size={{ xs: 12, md: 7 }}>
            <Box sx={{ textAlign: "left" }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontFamily: "lora",
                  fontWeight: "semibold",
                  fontSize: "36px",
                  color: "#101828",
                }}
              >
                Get a Property
              </Typography>

              <Box component="form">
                <Grid2 container spacing={2}>
                  <Grid2 size={{ xs: 12, md: 6 }}>
                    <Typography
                      sx={{
                        fontFamily: "Inter",
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
                      fullWidth
                      label="First name"
                      variant="outlined"
                      sx={{ boxShadow: 5 }}
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 6 }}>
                    <Typography
                      sx={{
                        fontFamily: "Inter",
                        color: "#344054",
                        mb: 1,
                        fontSize: "16px",
                        textAlign: "left",
                        fontWeight: "regular",
                      }}
                    >
                      Last Name
                    </Typography>
                    <TextField
                      fullWidth
                      label="Last name"
                      variant="outlined"
                      sx={{ boxShadow: 5 }}
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 6 }}>
                    <Typography
                      sx={{
                        fontFamily: "Inter",
                        color: "#344054",
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
                      label="@gmail.com"
                      type="email"
                      variant="outlined"
                      sx={{ boxShadow: 5 }}
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 6 }}>
                    <Typography
                      sx={{
                        fontFamily: "Inter",
                        color: "#344054",
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
                      label="Phone number"
                      variant="outlined"
                      sx={{ boxShadow: 5 }}
                      slotProps={{
                        input: {
                          startAdornment: (
                            <InputAdornment position="start">
                              <Select
                                defaultValue="NG"
                                variant="standard"
                                sx={{ mr: 1 }}
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
                        fontFamily: "Inter",
                        color: "#344054",
                        lineHeight: 1.8,
                        mb: 1,
                        fontSize: "16px",
                        textAlign: "left",
                        fontWeight: "regular",
                      }}
                    >
                      Property of Interest
                    </Typography>
                    <Select
                      fullWidth
                      label="Property of interest"
                      variant="outlined"
                      sx={{ boxShadow: 5 }}
                    >
                      <MenuItem value="Apartment">Apartment</MenuItem>
                      <MenuItem value="House">House</MenuItem>
                      <MenuItem value="Land">Land</MenuItem>
                    </Select>
                  </Grid2>
                  <Grid2 size={12}>
                    <Typography
                      sx={{
                        fontFamily: "Inter",
                        color: "#344054",
                        mb: 1,
                        fontSize: "16px",
                        textAlign: "left",
                        fontWeight: "regular",
                      }}
                    >
                      Payment Plan
                    </Typography>
                    <Select
                      fullWidth
                      label="Payment Plan"
                      variant="outlined"
                      sx={{ boxShadow: 5 }}
                    >
                      <MenuItem value="3 Months">3 Months</MenuItem>
                      <MenuItem value="6 Months">6 Months</MenuItem>
                      <MenuItem value="12 Months">12 Months</MenuItem>
                    </Select>
                  </Grid2>

                  <Grid2 size={12} sx={{ textAlign: "left" }}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="You agree to our friendly privacy policy."
                    />
                  </Grid2>
                  <Grid2 size={12}>
                    <Button
                      fullWidth
                      variant="contained"
                      size="large"
                      sx={{
                        textTransform: "none",
                        bgcolor: "#AE883B",
                        "&:hover": { bgcolor: "#967234" },
                        width: "100%",
                        fontWeight: "regular",
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
                src={ContactHero2.src}
                alt="Contact"
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 2,
                  // display: { xs: "none", md: "flex" },
                }}
              />
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Container>
  );
}
