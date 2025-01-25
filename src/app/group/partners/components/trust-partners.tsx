import React from 'react';
import Trust1 from '../../../../assets/img/trust-partner1.png';
import Trust2 from '../../../../assets/img/trust-partner2.png';
import Trust3 from '../../../../assets/img/trust-partner3.png';
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";


const TrustPartners = () => {
    return (
        <Box sx={{ width: '100%', bgcolor: '#FCF7EB', textAlign: 'center' }}>
            <Typography variant="h4" sx={{ color: '#344054', fontSize: '14px', fontWeight: 'bold', pt:{xs:3, md: 8,} }}>
                Partners that trust us
            </Typography>
    <Box p={2}>
        <Stack direction="row" spacing={2} justifyContent="center">
            <Box>
                <a href="##" target="_blank" rel="noopener noreferrer">
                    <CardMedia
                        component="img"
                        height="auto"
                        width="50"
                        image={Trust1.src}
                        alt="Waverio"
                        sx={{ p:2}}
                    />
                </a>
            </Box>
            <Box>
                <a href="##" target="_blank" rel="noopener noreferrer">
                    <CardMedia
                        component="img"
                        height="auto"
                        width="50"
                        image={Trust2.src}
                        alt="Waverio"
                        sx={{ p:2 }}
                    />
                </a>
            </Box>
            <Box>
                <a href="##" target="_blank" rel="noopener noreferrer">
                    <CardMedia
                        component="img"
                        height="auto"
                        width="50"
                        image={Trust3.src}
                        alt="Waverio"
                        sx={{ p:2 }}
                    />
                </a>
            </Box>
        </Stack>
    </Box>
        </Box>
    );
};

export default TrustPartners;
