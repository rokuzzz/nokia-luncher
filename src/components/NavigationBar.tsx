import React from 'react';
import {
  AppBar,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import { ReactComponent as NokiaLogo } from '../assets/nokia-logo.svg';

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
      <AppBar sx={{
        background: '#FFFFFF'
      }}>
        <Toolbar>
          <NokiaLogo width={'130'} />
          {/* <Typography variant='h6'>
          luncher
        </Typography> */}
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}

export default NavigationBar;
