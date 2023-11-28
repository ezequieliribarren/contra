import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './index.scss';
import Root from './Routes/Root';
import { DataProvider, FourDataProvider, SecondDataProvider } from '../Context/Context'; // Importa el DataProvider
import Work from './Routes/Work';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import About from './Routes/About';
import More from './Routes/More';
import { ThirdDataProvider } from '../Context/Context';
import { ToastContainer } from 'react-toastify';
import WorkMobile from './Components/WorkMobile/WorkMobile';



const router = createHashRouter([
  {
    path: "/",
    element: (
      <DataProvider>
        <SecondDataProvider>
          <Root />
        </SecondDataProvider>
      </DataProvider>
    )
  },
  {
    path: "/work",
    element: (
      <DataProvider>
        <SecondDataProvider>
          <Work />
        </SecondDataProvider>
      </DataProvider>
    )
  },
  {
    path: "/about",
    element: (
      <FourDataProvider>
        <SecondDataProvider>
          <About />
        </SecondDataProvider>
      </FourDataProvider>


    )
  },

  {
    path: "/more",
    element: (
      <ThirdDataProvider>
        <SecondDataProvider>
          <More />
        </SecondDataProvider>
      </ThirdDataProvider>

    )
  },

  {
    path: "/workMobile",
    element: (
      <DataProvider>
        <SecondDataProvider>
          <WorkMobile />
        </SecondDataProvider>
      </DataProvider>

    )
  },
  {
    path: "/project/:id",
    element: (
      <DataProvider>
        <SecondDataProvider>
          <ItemDetailContainer />
        </SecondDataProvider>
      </DataProvider>
    )
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      pauseOnHover
      style={{
        zIndex: 1111111,
        fontSize: '16px',
        fontWeight: 'bold',
        color: 'white',  // Color del texto
        fontFamily: 'machina',
      }}
      toastStyle={{
        backgroundColor: 'black',  // Puedes agregar estilos adicionales para las notificaciones individuales
        color: 'white',
        border: '2px solid orange',
      }}
    />
  </React.StrictMode>
);
