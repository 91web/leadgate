'use client'
import {Box, Container,Grid2,Typography,TextField,Checkbox,Button,FormControlLabel,Select, MenuItem, InputAdornment,} from '@mui/material'
import { Phone} from '@mui/icons-material'
import ContactHero2 from "../../../../assets/img/contactus-hero2.png";
import MarkunreadIcon from '@mui/icons-material/Markunread';
import FmdGoodIcon from '@mui/icons-material/FmdGood';


export default function ContactForm() {
  return (
    <Container maxWidth="lg" sx={{ pt: 4 }}>
      {/* Contact Info Cards */}
      <Grid2 container spacing={4} sx={{ mb: 8 }}>
        <Grid2 size={{xs:12 , md:4}}>
          <Box
            sx={{
              p: 2,
              bgcolor: '#F2F4F7',
              borderRadius: 1,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
             // alignItems: 'flex-start',
            }}
          >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="h6" gutterBottom color='#344054'    sx={{fontFamily:'inter',
             fontWeight:"bold",
             fontSize:{xs:'16px', md:'18px'} }}
             >
                Send us a mail
            </Typography>
            <MarkunreadIcon color="primary" sx={{ color:'#344054'  }} />
            </Box>
            <Typography variant="body2" color="text.secondary" gutterBottom mb={2} fontSize={'14px'} fontWeight={"regular"}>
              Speak to our friendly support staff
            </Typography>
            <Typography variant="body2" fontSize={'14px'} fontWeight={'medium'}>support@leadgategroup.com</Typography>
          </Box>
        </Grid2>

        <Grid2 size={{xs:12 , md:4}}>
          <Box
            sx={{
              p: 2,
              bgcolor: '#F2F4F7',
              borderRadius: 1,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            //  alignItems: 'flex-start',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="h6" gutterBottom color='#344054'    sx={{fontFamily:'inter',
             fontWeight:"bold",
             fontSize:{xs:'16px', md:'18px'} }}
             >
                 Visit us
            </Typography>
            <FmdGoodIcon color="primary" sx={{ color:'#344054'  }} />
            </Box>
            <Typography variant="body2" color="text.secondary" gutterBottom mb={2} fontSize={'14px'} fontWeight={"regular"}>
            Visit our physical offices here.
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom fontSize={'14px'} fontWeight={"medium"}>
            Suite M206/ M207, Second Floor, Middle Block, Millennium Builders&apos; Plaza, Plot 251 Herbert
              Macaulay Way, Central Business District, Abuja, FCT, Nigeria
            </Typography>
          </Box>
        </Grid2>

        <Grid2 size={{xs:12 , md:4}}>
          <Box
            sx={{
              p: 2,
              bgcolor: '#F2F4F7',
              borderRadius: 1,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
             // alignItems: 'flex-start',
            }}
          >
    
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="h6" gutterBottom color='#344054'    sx={{fontFamily:'inter', 
             fontWeight:"bold",
             fontSize:{xs:'16px', md:'18px'} }}
             >
            Call us
            </Typography>
            <Phone color="primary" sx={{ color:'#344054'  }} />
            </Box>

            <Typography variant="body2" color="text.secondary" gutterBottom mb={2} fontSize={'14px'} fontWeight={"regular"}>
               Mon - Fri from 8am - 5pm
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom fontSize={'14px'} fontWeight={"medium"}>
            +234 909 935 2438</Typography>
          </Box>
        </Grid2>
      </Grid2>

      {/* Contact Form Section */}
      <Grid2 container spacing={8}>
      <Grid2 size={{xs:12 , md:6}}>
          <Box
            component="img"
            src={ContactHero2.src}
            alt="Contact team"
            sx={{
              width: '100%',
              height: '75%',
              borderRadius: 2,
              display:{xs:'none', md:'flex'}
            }}
          />
        </Grid2>
        <Grid2 size={{xs:12 , md:6}}>
          <Typography variant="h4" gutterBottom sx={{alignContent:'center', fontFamily:'lora' ,textAlign:'center', fontWeight:'semibold', fontSize:'20px'}}>
            Want to make further enquiries?
          </Typography>
          <Typography variant="h4" gutterBottom sx={{alignContent:'center', fontFamily:'inter' ,textAlign:'center',color:'#344054', fontWeight:'semibold', fontSize:'16px'}}>
          Our friendly team would love to hear from you.
          </Typography>
          <Box component="form" sx={{ mt: 4 }}>
            <Grid2 container spacing={2}>
            <Grid2 size={{xs:12 , md:6}}>
                <TextField
                  fullWidth
                  label="First name"
                  placeholder="First name"
                  variant="outlined"
                />
              </Grid2>
              <Grid2 size={{xs:12 , md:6}}>
                <TextField
                  fullWidth
                  label="Last name"
                  placeholder="Last name"
                  variant="outlined"
                />
              </Grid2>
              <Grid2 size={{xs:12 , md:6}}>
                <TextField
                  fullWidth
                  label="Email"
                  placeholder="@gmail.com"
                  variant="outlined"
                  type="email"
                />
              </Grid2>
              <Grid2 size={{xs:12 , md:6}}>
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
                     }
                  }}
                />
              </Grid2>
              <Grid2 size={12}>
                <TextField
                  fullWidth
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </Grid2>
              <Grid2 size={12}>
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
                    textTransform:'none',
                    bgcolor: '#AE883B',
                    '&:hover': {
                      bgcolor: '#965F2A', 
                    },
                  }}
                >
                  Send Message
                </Button>
              </Grid2>
            </Grid2>
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  )
}

