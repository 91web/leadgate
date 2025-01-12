import React from 'react';
import { Box, Container} from '@mui/material';
import SlideHero from './components/slide-about';
import CoreValue from './components/core-value';
import FeatureEvents from './components/feature';
import BuildingHero from '../central-home-page/components/building-hero';

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
<Box sx={{ justifyContent: 'center' ,bgcolor:'#f5f5f5'}}> 
<Container>
  <FeatureEvents/>
  </Container>
</Box>
<Box>
  <BuildingHero/>
</Box>
</Box>
    
  )
}

export default AppGroup
