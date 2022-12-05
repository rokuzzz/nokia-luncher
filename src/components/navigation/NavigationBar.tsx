import React from 'react';
import {
  AppBar,
  Box,
  Slide,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
  IconButton,
} from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Link } from 'react-router-dom';

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

console.log(window.location.href);

// if(window.location.href.includes('info') == true) {
//   console.log(window.location.href)
//   isInfoPage = true;
//   console.log(window.location.href)
// }

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
          <Box>
            <Box>
              {window.location.href.includes('info') === true ? (
                <>
                  {isSmall ? (
                    <IconButton>
                      <Link
                        to='/'
                        style={{
                          textDecoration: 'none',
                          color: 'inherit',
                          fontSize: '0px',
                        }}
                      >
                        {' '}
                        <ArrowBackOutlinedIcon htmlColor='#124191'></ArrowBackOutlinedIcon>
                      </Link>
                    </IconButton>
                  ) : (
                    <HamburgerMenu />
                  )}
                </>
              ) : (
                <HamburgerMenu />
              )}
            </Box>
          </Box>

          <Box
            display={'flex'}
            alignContent={'center'}
            sx={
              isSmall
                ? { position: 'absolute', left: '50%', ml: '-50px' }
                : { ml: 2 }
            }
          >
            <NokiaLogo width={'100'} />
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}

export default NavigationBar;
