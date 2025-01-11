"use client"; 
import React from 'react';
import { Box, Typography ,Grid2 } from '@mui/material';




const Data = () => {
    return (
<Box sx={{ justifyContent: 'center', mt: 4 ,bgcolor:'#f5f5f5'}}> 
<Typography 
variant="h4"
gutterBottom
sx={{
    fontWeight: 'medium',
    fontFamily: 'inter',
    color: '#344054',
    fontSize: { xs: '16px', md: '18px' },
    width: "100%",
    textAlign: 'center',
    p:2,
}}>
    Evidence of Excellence over the Years
</Typography>

<Box
sx={{
display: 'flex',
alignItems: 'center',
justifyContent: 'center',

}}
>
<Grid2 container spacing={4} justifyContent="center">
<Grid2 size="auto">
<Box textAlign={'center'}>
    <Typography
    variant="h4"
    gutterBottom
    sx={{
        fontWeight: 'medium',
        fontFamily: 'lora',
        color: '#344054',
        fontSize: { xs: '25px', md: '30px' },
    }}
    >
    30+
 </Typography>
    <Typography
    variant="h4"
    gutterBottom
    sx={{
        fontWeight: 'regular',
        fontFamily: 'inter',
        color: '#344054',
        fontSize: { xs: '10px', md: '16px' },
    }}
    >
    Real Estate Properties
    </Typography>
</Box>
</Grid2>
<Grid2 size="auto">
<Box textAlign={'center'}>
    <Typography
    variant="h4"
    gutterBottom
    sx={{
        fontWeight: 'medium',
        fontFamily: 'lora',
        color: '#344054',
        fontSize: { xs: '28px', md: '30px' },
    }}
    >
    10+
    </Typography>
    <Typography
    variant="h4"
    gutterBottom
    sx={{
        fontWeight: 'regular',
        fontFamily: 'inter',
        color: '#344054',
        fontSize: { xs: '10px', md: '16px' },
    }}
    >
    Construction Sites
    </Typography>
</Box>
</Grid2>
<Grid2 size="auto">
<Box textAlign={'center'}>
    <Typography
    variant="h4"
    gutterBottom
    sx={{
        fontWeight: 'medium',
        fontFamily: 'lora',
        color: '#344054',
        fontSize: { xs: '25px', md: '30px' },
    }}
    >
    15+
    </Typography>
    <Typography
    variant="h4"
    gutterBottom
    sx={{
        fontWeight: 'regular',
        fontFamily: 'inter',
        color: '#344054',
        fontSize: { xs: '10px', md: '16px' },
    }}
    >
    Project Managers
    </Typography>
</Box>
</Grid2>
</Grid2>
</Box>
</Box>

);
};

export default Data;
