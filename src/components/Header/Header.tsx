import { IoMdMenu } from "react-icons/io";   
import LogoBlue from "../../assets/logo-blue.png"
import Show from "../Show";
import { Link } from "react-router-dom";
import { Button } from "antd";
import Hide from "../Hide";
import DrawerComponent from "../Menu/Drawer";
import MenuAuto from "../Menu/MenuAuto";
import Infobar from "./Infobar";
//? Header hareket ettğinde arka plan bg-blue-50 vb
//? Hamgurger Menu hover rengi değiş
export default function Header() {
  return (
    <header className="fixed w-full h-[127px]">
      <Infobar />
        <div className="flex w-full h-fit items-center justify-center bg-transparent">
            <div className="flex w-full h-[67px] lg:h-[100px] max-w-screen-xl justify-between items-center p-2">
                <div className="flex w-fit min-w-[160px] max-w-[227px] h-full max-h-[77px]">
                    <Link to="/" replace><img src={LogoBlue} alt="Reform Marine White Color Brand Logo" className="w-full h-full"/></Link>
                </div>
                <div className="w-fit max-w-[800px] h-fit">
                    <Show>
                      <div className="flex justify-center items-center w-full">
                        <MenuAuto
                          mode="horizontal"
                        />
                        <Button className="w-[130px] h-[40px] text-base uppercase text-white font-semibold border-0" type="primary">Get A Quote</Button>
                      </div>
                    </Show>
                    <Hide>
                        <DrawerComponent btnTitle={<IoMdMenu className="w-7 h-7"/>} btnType="link" btnClassName="text-black">
                        <MenuAuto
                          mode="inline"
                        />
                        <Button className="max-w-[330px] w-full h-[40px] text-base uppercase text-white font-semibold mt-2" type="primary">Get A Quote</Button>
                        </DrawerComponent>
                    </Hide>
                </div>
            </div>
        </div>
    </header>
  )
}