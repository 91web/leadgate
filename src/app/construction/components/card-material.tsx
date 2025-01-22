import React from 'react';
import { Box, Typography, Grid2, Container } from '@mui/material'
import { MaterialData, MaterialType } from '../components/static-data/data';


const CardMaterial = () => {
    const cardData:MaterialType[] = MaterialData;
  return (
<Box>
 <Box display="flex" justifyContent="center" alignItems="center" textAlign="center" py={8}>
      <Typography variant="body2" 
            sx={{ 
                 color: '#475467' ,
                 fontFamily: "'Lora'", 
                 fontSize:{xs:'24px', md:'30px'},
                 fontWeight:'medium',
                 width:{xs:'100%', md:'35%'},
            }}>
            We offer quality, with the best materials and service 
      </Typography>
 </Box>
<Box>
<Container maxWidth="lg">
<Box bgcolor={'#fff'}>
<Grid2 
    container 
    spacing={0}
>
    {cardData.map((card, index) => (
        <Grid2  size={{xs:12 , md:4}}
            key={index} 
        >
            <Box 
                sx={{ 
                    border: '1px solid #ccc', 
                    p: 2, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'flex-start' 
                }}
            >
                {card.icon}
                <Typography gutterBottom variant="h5" 
                    sx={{ 
                         color: '#344054' ,
                         fontFamily: "'Inter'", 
                         fontWeight:'bold',
                         fontSize:{xs:'18px', md:'20px'},
                    }}>
                    {card.title}
                </Typography>
                <Typography variant="body2" 
                    sx={{ 
                         color: '#475467' ,
                         fontFamily: "'Inter'", 
                         fontSize:'16px',
                         fontWeight:'regular',
                    }}>
                    {card.description}
                </Typography>
            </Box>
        </Grid2>
    ))}
</Grid2>
</Box>
</Container>
</Box>
</Box>
    );

}

export default CardMaterial
