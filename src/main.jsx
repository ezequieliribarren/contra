import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './index.scss';
import { DataProvider, FourDataProvider, SecondDataProvider, ThirdDataProvider } from '../Context/Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ToastContainer } from 'react-toastify';
import PreLoader from './Components/Preloader/Preloader';

// Lazy load components
const Root = lazy(() => import('./Routes/Root'));
const Work = lazy(() => import('./Routes/Work'));
const About = lazy(() => import('./Routes/About'));
const More = lazy(() => import('./Routes/More'));
const WorkMobile = lazy(() => import('./Components/WorkMobile/WorkMobile'));
const ItemDetailContainer = lazy(() => import('./Components/ItemDetailContainer/ItemDetailContainer'));

const router = createHashRouter([
  {
    path: '/',
    element: (
      <DataProvider>
        <SecondDataProvider>
          <Suspense fallback={<PreLoader/>}>
            <Root />
          </Suspense>
        </SecondDataProvider>
      </DataProvider>
    ),
  },
  {
    path: '/work',
    element: (
      <DataProvider>
        <SecondDataProvider>
          <Suspense fallback={<PreLoader/>}>
            <Work />
          </Suspense>
        </SecondDataProvider>
      </DataProvider>
    ),
  },
  {
    path: '/about',
    element: (
      <FourDataProvider>
        <SecondDataProvider>
          <Suspense fallback={<PreLoader/>}>
            <About />
          </Suspense>
        </SecondDataProvider>
      </FourDataProvider>
    ),
  },
  {
    path: '/more',
    element: (
      <ThirdDataProvider>
        <SecondDataProvider>
          <Suspense fallback={<PreLoader/>}>
            <More />
          </Suspense>
        </SecondDataProvider>
      </ThirdDataProvider>
    ),
  },
  {
    path: '/workMobile',
    element: (
      <DataProvider>
        <SecondDataProvider>
          <Suspense fallback={<PreLoader/>}>
            <WorkMobile />
          </Suspense>
        </SecondDataProvider>
      </DataProvider>
    ),
  },
  {
    path: '/project/:id',
    element: (
      <DataProvider>
        <SecondDataProvider>
          <Suspense fallback={<PreLoader/>}>
            <ItemDetailContainer />
          </Suspense>
        </SecondDataProvider>
      </DataProvider>
    ),
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
        color: 'white',
        fontFamily: 'machina',
      }}
      toastStyle={{
        backgroundColor: 'black',
        color: 'white',
        border: '2px solid orange',
      }}
    />
  </React.StrictMode>
);
