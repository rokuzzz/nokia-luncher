import { ThemeProvider, Toolbar, useMediaQuery } from '@mui/material';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import theme from './theme';
import Favorites from './pages/favorites';
import Menu from './pages/menu';
import Error from './pages/error';
import RestaurantInfo from './pages/restaurantInfo';
import BottomNav from './components/navigation/BottomNav';

function App() {
  useEffect(() => {
    document.title = 'Nokia Luncher';
  }, []);

  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      {/* <NavigationBar /> */}
      <Toolbar />
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/info' element={<RestaurantInfo />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer />
      {isSmall ? <BottomNav /> : null}
    </ThemeProvider>
  );
}

export default App;
