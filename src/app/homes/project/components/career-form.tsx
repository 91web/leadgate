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
import Paper from "@mui/material/Paper";

export default function CareerForm() {
  return (
    <Box py={{ xs: 5, md: 2 }}>
      <Container maxWidth="lg">
        {/* Contact Form Section */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          px={2}
        >
          <Paper
            elevation={2}
            sx={{
              maxWidth: "700px", // Adjust width as needed
              width: "100%",
              p: 4,
              borderRadius: 2,
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontFamily: "Lora",
                fontWeight: "medium",
                fontSize: "30px",
                mb: 4,
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
                    }}
                  >
                    First Name
                  </Typography>
                  <TextField fullWidth label="First name" variant="outlined" />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }}>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      color: "#344054",
                      mb: 1,
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Last Name
                  </Typography>
                  <TextField fullWidth label="Last name" variant="outlined" />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }}>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      color: "#344054",
                      mb: 1,
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Email
                  </Typography>
                  <TextField
                    fullWidth
                    label="@gmail.com"
                    type="email"
                    variant="outlined"
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
                    }}
                  >
                    Phone Number
                  </Typography>
                  <TextField
                    fullWidth
                    label="Phone number"
                    variant="outlined"
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

                <Grid2 size={{ xs: 12, md: 6 }}>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      color: "#344054",
                      lineHeight: 1.8,
                      mb: 1,
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Property of Interest
                  </Typography>
                  <Select fullWidth label="Property of interest" variant="outlined">
                    <MenuItem value="Apartment">Apartment</MenuItem>
                    <MenuItem value="House">House</MenuItem>
                    <MenuItem value="Land">Land</MenuItem>
                  </Select>
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }}>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      color: "#344054",
                      mb: 1,
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Payment Plan
                  </Typography>
                  <Select fullWidth label="Payment Plan" variant="outlined">
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
                      width: { xs: "100%", md: "40%" },
                    }}
                  >
                    Send Message
                  </Button>
                </Grid2>
              </Grid2>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
