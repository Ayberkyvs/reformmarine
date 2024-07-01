import './App.css'
import {
  createHashRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Suspense } from 'react';
import MainLayout from "./layouts/MainLayout"
import Countdown from './components/Countdown';

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
      <RouterProvider router={router} future={{ v7_startTransition: true }}/>
    </Suspense>
  );
}
