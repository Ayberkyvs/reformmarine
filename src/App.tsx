import { Suspense, lazy } from 'react';
import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";
import { ConfigProvider } from 'antd';
import './App.css';
import Loader from './components/Loader';
import ServicesLayout from './layouts/ServicesLayout';

const MainLayout = lazy(() => import("./layouts/MainLayout"));
const Countdown = lazy(() => import('./components/Countdown'));
const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Products = lazy(() => import('./pages/Products'));
const TheCompany = lazy(() => import('./pages/TheCompany'));
const Gallery = lazy(() => import('./pages/Gallery'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const Spare = lazy(() => import('./pages/Spare'));

const startTime = '2024-07-01T15:27:00'; // Başlangıç tarihi
const endTime = '2024-08-05T15:27:00';

import mainVisualContent from "./assets/electrical/mainVisualContent.jpg"
import visualContent from "./assets/electrical/visualContent.jpeg" 
import ContentPage from './components/ContentPage';

const electricalRouteConfigs = [
  {
    path: "/electrical",
    title: "Electrical Service",
    subtitle: "Electrical Service",
    description: "Reform Marine offers customized solutions to the maritime industry as a company specialized in electrical systems maintenance and repair. Our professional teams optimize the travel experience by improving the safety and performance of marine vessels with electrical maintenance services.",
    mainVisualContent: mainVisualContent,
    visualContent: visualContent
  },
  {
    path: "tank-radar-system",
    title: "Tank Radar System",
    subtitle: "Tank Radar System",
    description: "Description for Tank Radar System.",
    mainVisualContent: mainVisualContent,
    visualContent: visualContent
  },
  {
    path: "tank-level-gauging-system",
    title: "Tank Level Gauging System",
    subtitle: "Tank Level Gauging System",
    description: "Description for Tank Level Gauging System.",
    mainVisualContent: mainVisualContent,
    visualContent: visualContent
  },
  {
    path: "high-level-overfill-system",
    title: "High Level Overfill System",
    subtitle: "High Level Overfill System",
    description: "Description for High Level Overfill System.",
    mainVisualContent: mainVisualContent,
    visualContent: visualContent
  },
  {
    path: "gas-detection-system",
    title: "Gas Detection System",
    subtitle: "Gas Detection System",
    description: "Description for Gas Detection System.",
    mainVisualContent: mainVisualContent,
    visualContent: visualContent
  },
  {
    path: "gas-sampling-system",
    title: "Gas Sampling System",
    subtitle: "Gas Sampling System",
    description: "Description for Gas Sampling System.",
    mainVisualContent: mainVisualContent,
    visualContent: visualContent
  },
  {
    path: "fire-alarm-system",
    title: "Fire Alarm System",
    subtitle: "Fire Alarm System",
    description: "Description for Fire Alarm System.",
    mainVisualContent: mainVisualContent,
    visualContent: visualContent
  },
  {
    path: "navigation-lights-control-panel",
    title: "Navigation Lights Control Panel",
    subtitle: "Navigation Lights Control Panel",
    description: "Description for Navigation Lights Control Panel.",
    mainVisualContent: mainVisualContent,
    visualContent: visualContent
  },
  {
    path: "water-ingress-alarm-system",
    title: "Water Ingress Alarm System",
    subtitle: "Water Ingress Alarm System",
    description: "Description for Water Ingress Alarm System.",
    mainVisualContent: mainVisualContent,
    visualContent: visualContent
  },
  {
    path: "remote-controlled-valve-systems",
    title: "Remote Controlled Valve Systems",
    subtitle: "Remote Controlled Valve Systems",
    description: "Description for Remote Controlled Valve Systems.",
    mainVisualContent: mainVisualContent,
    visualContent: visualContent
  },
  {
    path: "oil-discharge-monitoring-system",
    title: "Oil Discharge Monitoring System",
    subtitle: "Oil Discharge Monitoring System",
    description: "Description for Oil Discharge Monitoring System.",
    mainVisualContent: mainVisualContent,
    visualContent: visualContent
  },
  {
    path: "ullage-temperature-interface",
    title: "Ullage Temperature Interface",
    subtitle: "Ullage Temperature Interface",
    description: "Description for Ullage Temperature Interface.",
    mainVisualContent: mainVisualContent,
    visualContent: visualContent
  },
  {
    path: "oily-water-seperator",
    title: "Oily Water Separator",
    subtitle: "Oily Water Separator",
    description: "Description for Oily Water Separator.",
    mainVisualContent: mainVisualContent,
    visualContent: visualContent
  },
  {
    path: "flowmeters",
    title: "Flowmeters",
    subtitle: "Flowmeters",
    description: "Description for Flowmeters.",
    mainVisualContent: mainVisualContent,
    visualContent: visualContent
  }
];
const mechanicalRouteConfigs = [
  {
    path: "/mechanical",
    title: "Mechanical Service",
    subtitle: "Mechanical Service",
    description: "Reform Marine offers customized solutions to the maritime industry as a company specialized in electrical systems maintenance and repair. Our professional teams optimize the travel experience by improving the safety and performance of marine vessels with electrical maintenance services.",
    mainVisualContent: mainVisualContent,
    visualContent: visualContent
  },
  {
    path: "main-engine-service",
    title: "Main Engine Service",
    subtitle: "Main Engine Service",
    description: "Reform Marine offers comprehensive main engine services to ensure optimal performance and longevity of marine engines.",
    mainVisualContent: mainVisualContent,
    visualContent: visualContent
  },
  {
    path: "diesel-generator-maintenance-service",
    title: "Diesel Generator Maintenance & Service",
    subtitle: "Diesel Generator Maintenance & Service",
    description: "Professional maintenance and service for diesel generators to guarantee reliable power supply on marine vessels.",
    mainVisualContent: mainVisualContent,
    visualContent: visualContent
  },
  {
    path: "alternator-service",
    title: "Alternator Service",
    subtitle: "Alternator Service",
    description: "Expert alternator services to maintain the electrical systems of marine vessels.",
    mainVisualContent: mainVisualContent,
    visualContent: visualContent
  },
  {
    path: "auxiliary-machinery-service",
    title: "Auxiliary Machinery Service",
    subtitle: "Auxiliary Machinery Service",
    description: "Comprehensive service for all auxiliary machinery to ensure smooth operation and efficiency.",
    mainVisualContent: mainVisualContent,
    visualContent: visualContent
  },
  {
    path: "ballast-water-treatment-system",
    title: "Ballast Water Treatment System",
    subtitle: "Ballast Water Treatment System",
    description: "Specialized services for ballast water treatment systems to comply with environmental regulations.",
    mainVisualContent: mainVisualContent,
    visualContent: visualContent
  },
  {
    path: "exhaust-gas-scrubber",
    title: "Exhaust Gas Scrubber",
    subtitle: "Exhaust Gas Scrubber",
    description: "Maintenance and service for exhaust gas scrubbers to reduce emissions and meet regulatory standards.",
    mainVisualContent: mainVisualContent,
    visualContent: visualContent
  },
  {
    path: "air-compressor-overhaul",
    title: "Air Compressor Overhaul",
    subtitle: "Air Compressor Overhaul",
    description: "Comprehensive overhaul services for air compressors to ensure efficient and reliable operation.",
    mainVisualContent: mainVisualContent,
    visualContent: visualContent
  },
  {
    path: "aux-composite-boilers-maintenance",
    title: "Aux and Composite Boilers Maintenance",
    subtitle: "Aux and Composite Boilers Maintenance",
    description: "Professional maintenance services for auxiliary and composite boilers to ensure safety and efficiency.",
    mainVisualContent: mainVisualContent,
    visualContent: visualContent
  },
  {
    path: "incinerator-maintenance-refactory",
    title: "Incinerator Maintenance and Refactory",
    subtitle: "Incinerator Maintenance and Refactory",
    description: "Expert maintenance and refractory services for marine incinerators to ensure compliance and efficiency.",
    mainVisualContent: mainVisualContent,
    visualContent: visualContent
  },
  {
    path: "air-condition-refrigeration-maintenance",
    title: "Air Condition and Refrigeration Systems Maintenance",
    subtitle: "Air Condition and Refrigeration Systems Maintenance",
    description: "Specialized maintenance services for air conditioning and refrigeration systems on marine vessels.",
    mainVisualContent: mainVisualContent,
    visualContent: visualContent
  }
];


const generateRoutes = (routes: any) => {
  return routes.map((config: any, index: number) => ({
    path: config.path,
    element: <ContentPage 
              key={index}
              title={config.title}
              subtitle={config.subtitle}
              description={config.description}
              mainVisualContent={config.mainVisualContent}
              visualContent={config.visualContent}
            />
  }));
};
export default function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Countdown startTime={startTime} endTime={endTime}><Home /></Countdown>,
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
          element: <ServicesLayout tab='electrical' />,
          children: generateRoutes(electricalRouteConfigs)
        },
        {
          path: "mechanical",
          element: <ServicesLayout tab='mechanical' />,
          children: generateRoutes(mechanicalRouteConfigs)
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
