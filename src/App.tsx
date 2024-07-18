import './App.css'
import {
  createHashRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Suspense } from 'react';
import MainLayout from "./layouts/MainLayout"
import Countdown from './components/Countdown';
import { ConfigProvider } from 'antd';
import Home from './pages/Home';

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
        }
      ]
      // errorElement: <ErrorBoundary />,
    },
    {
      path: "*",
      element: <Navigate to="/404" replace/>,
    },
  ]);
  return (
    <Suspense fallback={<h1>Loading..</h1>}> 
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
            itemColor: "#001B33",
            horizontalItemSelectedColor: "#0089FF",
            itemHoverColor: "#0089FF",
          },
        },
      }}
      >
        <RouterProvider router={router} future={{ v7_startTransition: true }}/>
      </ConfigProvider>
    </Suspense>
  );
}
