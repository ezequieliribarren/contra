import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './index.scss';
import Root from './Routes/Root';
import { DataProvider } from '../Context/Context'; // Importa el DataProvider
import Work from './Routes/Work';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import About from './Routes/About';


const router = createHashRouter([
  {
    path: "/",
    element: (
      <DataProvider> 
        <Root />
      </DataProvider>
    )
  },
  {
    path: "/work",
    element: (
      <DataProvider> 
        <Work />
      </DataProvider>
    )
  },
  {
    path: "/about",
    element: (
        <About />
    )
  },
  {
    path: "/project/:id",
    element: (
      <DataProvider> 
        <ItemDetailContainer/>
      </DataProvider>
    )
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
  