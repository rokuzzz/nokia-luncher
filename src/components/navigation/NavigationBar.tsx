import React, { useState } from 'react';
import {
  AppBar,
  Slide,
  Toolbar,
  useScrollTrigger,
} from '@mui/material';

import { ReactComponent as NokiaLogo } from '../../assets/nokia-logo.svg'
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
  
  return (
    <HideOnScroll>
      <AppBar
        sx={{
          background: '#FFFFFF',
        }}
      >
        <Toolbar>
          <HamburgerMenu />
          <NokiaLogo width={'100'} />

        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}

export default NavigationBar;
