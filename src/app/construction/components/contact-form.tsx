import { Box, Container, Grid2, Typography, TextField, Checkbox, Button, FormControlLabel, Select, MenuItem, InputAdornment } from '@mui/material';
import { Phone } from '@mui/icons-material';
import ContactHero2 from "../../../assets/img/contactus-hero3.png";
import MarkunreadIcon from '@mui/icons-material/Markunread';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

export default function ContactForm() {
  return (
    <Container maxWidth="lg">
      {/* Contact Info Cards */}
     

      {/* Contact Form Section */}
      <Box mx={'5%'}>
      <Grid2 container spacing={8}>
        <Grid2 size={{ xs: 12, md: 5 }}>
          <Box >
            <Box
              component="img"
              src={ContactHero2.src}
              alt="Contact team"
              sx={{
                width: '100%',
                height: '100%',
                borderRadius: 2,
                display: { xs: 'none', md: 'flex' }
              }}
            />
          </Box>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 7 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontFamily: 'lora', fontWeight: 'semibold', fontSize: '20px' }}
            >
              Want to make further enquiries?
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontFamily: 'inter',
                color: '#344054',
                fontWeight: 'semibold',
                fontSize: '16px'
              }}
            >
              Our friendly team would love to hear from you.
            </Typography>

            <Box component="form" sx={{ mt: 4 }}>
              <Grid2 container spacing={2}>
                <Grid2 size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth label="First name" placeholder="First name" variant="outlined" />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth label="Last name" placeholder="Last name" variant="outlined" />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth label="Email" placeholder="@gmail.com" variant="outlined" type="email" />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Phone number"
                    variant="outlined"
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <Select defaultValue="NG" variant="standard" sx={{ mr: 1 }}>
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
                  <TextField fullWidth label="Message" multiline rows={4} variant="outlined" />
                </Grid2>
                <Grid2 size={12} sx={{ textAlign:'left'}}>
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
                      textTransform: 'none',
                      bgcolor: '#AE883B',
                      '&:hover': { bgcolor: '#965F2A' },
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
