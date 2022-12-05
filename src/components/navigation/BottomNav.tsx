import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BottomNav() {
  const [value, setValue] = useState(0);

  const permanentValue = Number(localStorage.getItem('value'));

  const navigate = useNavigate();
  return (
    <BottomNavigation
      value={permanentValue ? permanentValue : value}
      onChange={(event, newValue) => {
        setValue(newValue);
        localStorage.setItem('value', newValue.toString());
      }}
      sx={{
        justifySelf: 'center',
        alignSelf: 'center',
        margin: 'auto',
        padding: '10px 0 10px',
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
        label='Favorites'
        icon={<FavoriteIcon />}
        onClick={() => navigate('/favorites')}
      />
      <BottomNavigationAction
        label='Info'
        icon={<InfoIcon />}
        onClick={() => navigate('/info')}
      />
    </BottomNavigation>
  );
}

export default BottomNav;
