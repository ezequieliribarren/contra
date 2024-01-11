import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './index.scss';
<<<<<<< HEAD
import Root from './Routes/Root';
import { DataProvider, FourDataProvider, SecondDataProvider } from '../Context/Context'; // Importa el DataProvider
import Work from './Routes/Work';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
=======
import { DataProvider, FourDataProvider, GifsProvider, SecondDataProvider, ThirdDataProvider } from '../Context/Context';
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ToastContainer } from 'react-toastify';
import Root from './Routes/Root'
import Work from './Routes/Work'
import About from './Routes/About'
import WorkMobile from './Components/WorkMobile/WorkMobile';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import More from './Routes/More'


const router = createHashRouter([
  {
    path: '/',
    element: (
      <DataProvider>
        <SecondDataProvider>
<<<<<<< HEAD
          <Root />
        </SecondDataProvider>

=======
            <Root />
        </SecondDataProvider>
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
      </DataProvider>
    ),
  },
  {
    path: '/work',
    element: (
      <DataProvider>
        <SecondDataProvider>
            <Work />
        </SecondDataProvider>
      </DataProvider>
    ),
  },
  {
    path: '/about',
    element: (
      <FourDataProvider>
        <SecondDataProvider>
<<<<<<< HEAD
          <About />
        </SecondDataProvider>
      </FourDataProvider>


    )
=======
            <About />
        </SecondDataProvider>
      </FourDataProvider>
    ),
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
  },
  {
    path: '/more',
    element: (
      <ThirdDataProvider>
<<<<<<< HEAD
        <More />
=======
        <SecondDataProvider>
            <More />
        </SecondDataProvider>
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
      </ThirdDataProvider>
    ),
  },
  {
    path: '/workMobile',
    element: (
      <DataProvider>
        <SecondDataProvider>
            <WorkMobile />
        </SecondDataProvider>
      </DataProvider>
    ),
  },
  {
    path: '/project/:id',
    element: (
      <DataProvider>
        <SecondDataProvider>
            <ItemDetailContainer />
        </SecondDataProvider>
      </DataProvider>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifsProvider>
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
        color: 'white',
        fontFamily: 'machina',
      }}
      toastStyle={{
        backgroundColor: 'black',
        color: 'white',
        border: '2px solid orange',
      }}
    />
    </GifsProvider>
  </React.StrictMode>
);
