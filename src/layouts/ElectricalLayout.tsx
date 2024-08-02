import { createContext, useContext, useState } from 'react';
import { Outlet } from "react-router-dom"
import Banner from "../assets/banners/spareparts.webp"
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

function ElectricalLayout() {
    const [title, setTitle] = useState('Electrical Service');
  return (
    <PageHeadingContext.Provider value={{ title, setTitle }}>
      <section>
        <PageHeading title={title} backgroundImage={Banner} backgroundPosition='center' />
        <Outlet />
      </section>
    </PageHeadingContext.Provider>
  )
}

export default ElectricalLayout