import { useEffect } from 'react';
import { IoMdMenu } from "react-icons/io";   
import { Link } from "react-router-dom";
import { useAnimation, useScroll, motion } from 'framer-motion';
import LogoBlue from "../../assets/logo-blue.png";
import Show from "../Show";
import Hide from "../Hide";
import DrawerComponent from "../Menu/Drawer";
import MenuAuto from "../Menu/MenuAuto";
import Infobar from "./Infobar";

export default function Header() {
  const controls = useAnimation();
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      if (latest > 30) {
        controls.start({
          y: -30,
          backgroundColor: "#F7F8FA",
          transition: { duration: 0.1 },
          boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.1)",
        });
      } else {
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
      className="fixed w-full h-fit z-[1]"
      animate={controls}
      initial={{ y: 0, backgroundColor: "transparent" }}
    >
      <Infobar />
      <div className="flex w-full h-fit items-center justify-center">
        <div className="flex w-full h-[67px] lg:h-[90px] max-w-screen-xl justify-between items-center p-2">
          <div className="flex w-fit h-full max-w-[142px] lg:max-w-none">
            <Link to="/" replace>
              <img src={LogoBlue} alt="Reform Marine White Color Brand Logo" className="w-full h-full" draggable={false}/>
            </Link>
          </div>
          <div className="w-fit max-w-[800px] h-fit">
            <Show>
              <div className="flex justify-center items-center w-full">
                <MenuAuto mode="horizontal" />
              </div>
            </Show>
            <Hide>
              <DrawerComponent btnTitle={<IoMdMenu className="w-6 h-6"/>} btnType="link" btnClassName="text-black">
                <MenuAuto mode="inline" />
              </DrawerComponent>
            </Hide>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
