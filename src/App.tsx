import { Suspense, lazy } from 'react';
import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";
import { ConfigProvider } from 'antd';
import './App.css';
import Loader from './components/Loader';

const MainLayout = lazy(() => import("./layouts/MainLayout"));
const Countdown = lazy(() => import('./components/Countdown'));
const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Products = lazy(() => import('./pages/Products'));
const TheCompany = lazy(() => import('./pages/TheCompany'));
const Gallery = lazy(() => import('./pages/Gallery'));
const ContactUs = lazy(() => import('./pages/ContactUs'));

const startTime = '2024-07-01T15:27:00'; // Başlangıç tarihi
const endTime = '2024-08-05T15:27:00';

export default function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Countdown startTime={startTime} endTime={endTime}><h1>asdasd</h1></Countdown>,
        },
        {
          path: "/home",
          element: <Home />
        },
        {
          path: "products",
          element: <Products />
        },
        {
          path: "company",
          element: <TheCompany />,
        },
        {
          path: "gallery",
          element: <Gallery />,
        },
        {
          path: "contact",
          element: <ContactUs />,
        },
        {
          path: "404",
          element: <NotFound />,
        },
      ]
      // errorElement: <ErrorBoundary />,
    },
    {
      path: "*",
      element: <Navigate to="/404" replace/>,
    },
  ]);
  return (
    <ConfigProvider 
      theme={{
        token: {
          colorPrimary: '#005197',
          colorPrimaryBg: '#E5F3FF',
          colorLink: '#0089FF',
          colorError: "#E71818",
          colorInfo: "#0089FF",
          colorSuccess: "#2BD46F",
          colorTextBase: "#000",
          colorWarning: "#E69319",
          fontFamily: "Poppins",
          fontSizeHeading1: 54,
          fontSizeHeading2:	36,
          fontSizeHeading3:	30,
          fontSizeHeading4:	24,
          fontSizeHeading5:	21,
          lineHeightHeading1: 1.5,
          lineHeightHeading2: 1.5,
          lineHeightHeading3: 1.5,
          lineHeightHeading4: 1.5,
          lineHeightHeading5: 1.3,
          fontSize: 16,	
        },
        components: {
          Menu: {
            darkItemSelectedBg: "#fff",
            darkItemSelectedColor: "#005197",
            itemColor: "#001B33",
          },
          Breadcrumb: {
            itemColor: "rgba(255, 255, 255, 0.75)",
            lastItemColor: "rgba(255, 255, 255, 1.0)",
            linkColor: "rgba(255, 255, 255, 0.75)",
            linkHoverColor:	"rgba(255, 255, 255, 1.0)",
            separatorColor:	"rgba(255, 255, 255, 0.75)",
          }
        },
      }}
      >
      <Suspense fallback={<Loader />}> 
        <RouterProvider router={router} future={{ v7_startTransition: true }}/>
      </Suspense>
    </ConfigProvider>
  );
}
