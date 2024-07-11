import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import FloatingButtonMenu from "../components/FloatingButtonMenu";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <FloatingButtonMenu />
      </main>
    </>
  )
}