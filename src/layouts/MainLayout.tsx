import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import FloatingButtonMenu from "../components/FloatingButtonMenu";
import Hide from "../components/Hide";
import Footer from "../components/Footer/Footer"
import ScrollToTop from "../components/ScrollToTop";

export default function MainLayout() {
  return (
    <>
      <ScrollToTop /> 
      <Header />
      <main>
        <Outlet />
        <Hide>
          <FloatingButtonMenu />
        </Hide>
      </main>
      <Footer />
    </>
  )
}