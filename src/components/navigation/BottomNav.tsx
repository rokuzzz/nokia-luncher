import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function BottomNav() {
  const [value, setValue] = useState(0);

  const navigate = useNavigate();
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      sx={{
        justifySelf: 'center',
        alignSelf: 'center',
        margin: 'auto',
        position: 'fixed',
        bottom: 0,
        width: '96%',
      }}
    >
      <BottomNavigationAction
        label='Home'
        icon={<HomeIcon />}
        onClick={() => navigate('/')}
      />

      <BottomNavigationAction
        label='Info'
        icon={<InfoIcon />}
        onClick={() => navigate('/info')}
      />

      <BottomNavigationAction
        label='Favorites'
        icon={<FavoriteIcon />}
        onClick={() => navigate('/favorites')}
      />
    </BottomNavigation>
  );
}

export default BottomNav;
