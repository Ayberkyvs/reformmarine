import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import FloatingButtonMenu from "../components/FloatingButtonMenu";
import Hide from "../components/Hide";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <Hide>
          <FloatingButtonMenu />
        </Hide>
      </main>
    </>
  )
}