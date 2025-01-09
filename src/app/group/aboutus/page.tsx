import React from 'react';
import { Box, Container} from '@mui/material';
import SlideHero from './components/slide-hero';
import CoreValue from './components/core-value';

const AppGroup = () => {
  return (
    <Box>
    <div>
   <h1>App LeadGate Group</h1>
    </div>
  <Box>
  <SlideHero/>
</Box>
<Container>
<CoreValue/>
</Container>
    </Box>
    
  )
}

export default AppGroup
