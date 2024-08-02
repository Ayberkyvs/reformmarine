import { useEffect, useState } from 'react';
import { IoMdMenu } from "react-icons/io";   
import { Link } from "react-router-dom";
import { useAnimation, useScroll, motion } from 'framer-motion';
import Show from "../Show";
import Hide from "../Hide";
import DrawerComponent from "../Menu/Drawer";
import MenuAuto from "../Menu/MenuAuto";
import Infobar from "./Infobar";
import { MenuTheme } from 'antd';
import Logo from '../../Logo';

export default function Header() {
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const [mode, setMode] = useState<MenuTheme>("dark");

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      if (latest > 30) {
        setMode("light")
        controls.start({
          y: -30,
          backgroundColor: "#F7F8FA",
          transition: { duration: 0.1 },
          boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.1)",
        });
      } else {
        setMode("dark")
        controls.start({
          y: 0,
          backgroundColor: "transparent",
          transition: { duration: 0.1 },
          boxShadow: "none",
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, [scrollY, controls]);

  return (
    <motion.header
      className="fixed top-0 w-full h-fit z-[999]"
      animate={controls}
      initial={{ y: 0, backgroundColor: "transparent" }}
    >
      <Infobar />
      <div className="flex w-full h-fit items-center justify-center">
        <div className="flex w-full h-[67px] lg:h-[90px] max-w-screen-xl justify-between items-center p-2">
          <div className="flex w-full h-full max-w-[100px] lg:max-w-[140px]">
            <Link to="/" replace>
              <Logo className={`w-full h-full ${mode === "light" ? "text-primary" : "text-white"}`} />
            </Link>
          </div>
          <div className="w-fit max-w-[800px] h-fit">
            <Show>
              <div className="flex justify-center items-center w-full">
                <MenuAuto mode="horizontal" theme={mode} callToAction/>
              </div>
            </Show>
            <Hide>
              <DrawerComponent btnTitle={<IoMdMenu className="w-6 h-6"/>} btnType="link" btnClassName={`${mode === "light" ? "text-primary" : "text-white"}`}>
                <MenuAuto mode="inline" theme={mode}/>
              </DrawerComponent>
            </Hide>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
