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
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

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
            sx={{ maxWidth: "700px", width: "100%", p: 4, borderRadius: 2 }}
          >
            <Typography
              variant="h4"
              gutterBottom
              textAlign={"center"}
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
                  <FormControl fullWidth>
                    <FormLabel>First Name</FormLabel>
                    <TextField fullWidth variant="outlined" />
                  </FormControl>
                </Grid2>

                <Grid2 size={{ xs: 12, md: 6 }}>
                  <FormControl fullWidth>
                    <FormLabel>Last Name</FormLabel>
                    <TextField fullWidth variant="outlined" />
                  </FormControl>
                </Grid2>

                <Grid2 size={{ xs: 12, md: 6 }}>
                  <FormControl fullWidth>
                    <FormLabel>Email</FormLabel>
                    <TextField fullWidth type="email" variant="outlined" />
                  </FormControl>
                </Grid2>

                <Grid2 size={{ xs: 12, md: 6 }}>
                  <FormControl fullWidth>
                    <FormLabel>Phone Number</FormLabel>
                    <TextField
                      fullWidth
                      variant="outlined"
                      name="phoneNumber"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Select
                              variant="outlined"
                              sx={{ mr: 1, "& fieldset": { border: "none" } }}
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

                <Grid2 size={{ xs: 12, md: 6 }}>
                  <FormControl fullWidth>
                    <FormLabel>Property of Interest</FormLabel>
                    <Select fullWidth variant="outlined">
                      <MenuItem value="Apartment">Apartment</MenuItem>
                      <MenuItem value="House">House</MenuItem>
                      <MenuItem value="Land">Land</MenuItem>
                    </Select>
                  </FormControl>
                </Grid2>

                <Grid2 size={{ xs: 12, md: 6 }}>
                  <FormControl fullWidth>
                    <FormLabel>Payment Plan</FormLabel>
                    <Select fullWidth variant="outlined">
                      <MenuItem value="3 Months">3 Months</MenuItem>
                      <MenuItem value="6 Months">6 Months</MenuItem>
                      <MenuItem value="12 Months">12 Months</MenuItem>
                    </Select>
                  </FormControl>
                </Grid2>

                <Grid2 size={12} sx={{ textAlign: "left" }}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="You agree to our friendly privacy policy."
                  />
                </Grid2>
                <Box
                  width={1}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
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
                </Box>
              </Grid2>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
