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
            maxWidth: '220px',
            width: '50vw',
            height: '100%',
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
            <Link
              to='/'
              style={{ textDecoration: 'none', color: 'inherit', fontSize: 18, width: '100%' }}
            >
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
              style={{ textDecoration: 'none', color: 'inherit', fontSize: 18, width: '100%' }}
            >
              Favorites
            </Link>
          </Button>
          <Button
            color='inherit'
            onClick={() => {
              setHamburgerOpen(false);
            }}
          >
            <Link
              to='/info'
              style={{ textDecoration: 'none', color: 'inherit', fontSize: 18, width: '100%' }}
            >
              Info
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
