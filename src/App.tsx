import { createTheme, ThemeProvider, Toolbar } from '@mui/material';
import { useEffect } from 'react';
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';
import NavigationBar from './components/navigation/NavigationBar';
import Favorites from './pages/favorites';
import Menu from './pages/menu';

const theme = createTheme({
  // TODO !!
  // palette: {
  //   primary: {
  //     main: 'SOME_COLOR'
  //   }
  // }
  zIndex: {
    appBar: 1251,
    modal: 1250,
  },
});

function App() {
  useEffect(() => {
    document.title = 'Nokia Luncher';
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <NavigationBar />
      <Toolbar />
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/favorites' element={<Favorites />} />
        {/* <Route path='*' element={<PageNotFound/>} /> */}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
