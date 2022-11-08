import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux';

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Menu from './routes/menu';
import Favorites from './routes/favorites';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Menu />,
  },
  {
    path: '/favorites',
    element: <Favorites />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
export {};
