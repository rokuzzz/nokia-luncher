import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Slide,
  Toolbar,
  Typography,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from '@mui/material';

import { ReactComponent as NokiaLogo } from '../../assets/nokia-logo.svg';
import HamburgerMenu from './HamburgerMenu';

interface Props {
  children: React.ReactElement;
}

function HideOnScroll({ children }: Props) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction={'down'} in={!trigger}>
      {children}
    </Slide>
  );
}

function NavigationBar() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <HideOnScroll>
      <AppBar
        sx={{
          background: '#FFFFFF',
        }}
      >
        <Toolbar>
          <HamburgerMenu />
          <Box display={'flex'} alignContent={'center'} sx={ isSmall ? {margin: 'auto'} : {ml: 2}} >
            <NokiaLogo width={'100'} />
          </Box>
          {/* <Typography sx={{background: 'black'}}>Luncher</Typography> */}
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}

export default NavigationBar;
