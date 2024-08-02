import { Suspense, lazy } from 'react';
import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";
import { ConfigProvider } from 'antd';
import './App.css';
import Loader from './components/Loader';
import ElectricalLayout from './layouts/ElectricalLayout';
import TankRadarSystem from './pages/Electrical/TankRadarSystem';
import TankLevelGaugingSystem from './pages/Electrical/TankLevelGaugingSystem';
import HighLevelOverfillSystem from './pages/Electrical/HighLevelOverfillSystem';
import GasDetectionSystem from './pages/Electrical/GasDetectionSystem';
import GasSamplingSystem from './pages/Electrical/GasSamplingSystem';
import FireAlarmSystem from './pages/Electrical/FireAlarmSystem';
import NavigationLightsControlPanel from './pages/Electrical/NavigationLightsControlPanel';
import WaterIngressAlarmSystem from './pages/Electrical/WaterIngressAlarmSystem';
import RemoteControlledValveSystems from './pages/Electrical/RemoteControlledValveSystems';
import OilDischargeMonitoringSystem from './pages/Electrical/OilDischargeMonitoringSystem';
import UllageTemperatureInterfaceSystem from './pages/Electrical/UllageTemperatureInterfaceSystem';
import OilyWaterSeperatorSystem from './pages/Electrical/OilyWaterSeperatorSystem';
import Flowmeters from './pages/Electrical/Flowmeters';

const MainLayout = lazy(() => import("./layouts/MainLayout"));
const Countdown = lazy(() => import('./components/Countdown'));
const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Products = lazy(() => import('./pages/Products'));
const TheCompany = lazy(() => import('./pages/TheCompany'));
const Gallery = lazy(() => import('./pages/Gallery'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const Electrical = lazy(() => import('./pages/Electrical/Electrical'));
const Mechanical = lazy(() => import('./pages/Mechanical'));
const Spare = lazy(() => import('./pages/Spare'));

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
          element: <Countdown startTime={startTime} endTime={endTime}><h1>asdasd</h1><Home /></Countdown>,
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
          path: "electrical",
          element: <ElectricalLayout />,
          children: [        
            {
              path: "/electrical",
              element: <Electrical />,
            },
            { path: "tank-radar-system", element: <TankRadarSystem />},
            { path: "tank-level-gauging-system", element: <TankLevelGaugingSystem /> },
            { path: "high-level-overfill-system", element: <HighLevelOverfillSystem /> },
            { path: "gas-detection-system", element: <GasDetectionSystem /> },
            { path: "gas-sampling-system", element: <GasSamplingSystem /> },
            { path: "fire-alarm-system", element: <FireAlarmSystem /> },
            { path: "navigation-lights-control-panel", element: <NavigationLightsControlPanel /> },
            { path: "water-ingress-alarm-system", element: <WaterIngressAlarmSystem /> },
            { path: "remote-controlled-valve-systems", element: <RemoteControlledValveSystems /> },
            { path: "oil-discharge-monitoring-system", element: <OilDischargeMonitoringSystem /> },
            { path: "ullage-temperature-interface", element: <UllageTemperatureInterfaceSystem /> },
            { path: "oily-water-seperator", element: <OilyWaterSeperatorSystem /> },
            { path: "flowmeters", element: <Flowmeters /> }
          ]
        },
        {
          path: "mechanical",
          element: <Mechanical />
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
          path: "spareparts",
          element: <Spare />,
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
