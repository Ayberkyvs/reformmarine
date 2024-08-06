import { createContext, useContext, useEffect, useState } from 'react';
import { Outlet } from "react-router-dom"
import ElectricalBanner from "../assets/banners/electrical.webp"
import MechanicalBanner from "../assets/banners/mechanical.webp"
import PageHeading from "../components/PageHeading"

interface PageHeadingContextProps {
    title: string;
    setTitle: (title: string) => void;
}

const PageHeadingContext = createContext<PageHeadingContextProps | undefined>(undefined);

export const usePageHeading = () => {
    const context = useContext(PageHeadingContext);
    if (context === undefined) {
      throw new Error('usePageHeading must be used within a PageHeadingProvider');
    }
    return context;
  };

function ServicesLayout({tab}: {tab: string}) {
    const [title, setTitle] = useState('Electrical Service');
    useEffect(()=> {
        setTitle(tab == "electrical" ? 'Electrical Service' : 'Mechanical Service');
    },[tab])
  return (
    <PageHeadingContext.Provider value={{ title, setTitle }}>
      <section>
        <PageHeading title={title} backgroundImage={tab == "electrical" ? ElectricalBanner : MechanicalBanner} backgroundPosition='center' />
        <Outlet />
      </section>
    </PageHeadingContext.Provider>
  )
}

export default ServicesLayout