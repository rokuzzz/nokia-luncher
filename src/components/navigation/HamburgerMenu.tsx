import { useState } from 'react';
import { Button, Drawer, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from 'react-router-dom';

function HamburgerMenu() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  return (
    <>
      <Drawer
        open={hamburgerOpen}
        onClose={() => setHamburgerOpen(false)}
        anchor='left'
        transitionDuration={{ enter: 700, exit: 700 }}
        PaperProps={{
          elevation: 8,
          sx: {
            width: '150px',
          },
        }}
      >
        {/* navigation */}
        <>
          <Toolbar />
          <Button
            color='inherit'
            onClick={() => {
              setHamburgerOpen(false);
            }}
          >
            <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
              Menu
            </Link>
          </Button>
          <Button
            color='inherit'
            onClick={() => {
              setHamburgerOpen(false);
            }}
          >
            <Link
              to='/favorites'
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Favorites
            </Link>
          </Button>
        </>
      </Drawer>
      <IconButton
        onClick={() => setHamburgerOpen(!hamburgerOpen)}
        sx={{ mr: 0 }}
      >
        <MenuIcon fontSize='medium' htmlColor='#124191' />
      </IconButton>
    </>
  );
}

export default HamburgerMenu;
