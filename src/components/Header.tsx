import { FaSquareWhatsapp, FaSquareInstagram, FaLinkedin, FaGooglePlus, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
// import BlueLogo from "../assets/logo-blue.png"
// import WhiteLogo from "../assets/logo-white.png"
import DesktopWhiteLogo from "../assets/logo-white-desktop.png"
import Show from "./Show";
// import Hide from "./Hide";
import { Link } from "react-router-dom";
// import { BiPhone } from "react-icons/bi";

export default function Header() {
  return (
    <header className="fixed w-full h-[127px]">
        <div className="flex w-full h-fit bg-orange-50 items-center justify-center">
            <div className="flex w-full max-w-screen-xl h-[25px] lg:h-[30px] justify-between items-center p-2">
                <ul className="flex items-center gap-2 md:gap-5 w-full h-full justify-between lg:justify-start text-xs">
                    <li className="flex text-[9px] md:text-xs text-orange-800"><a href="tel:+90 537 344 25 66" className="flex items-center gap-[5px]" target="_blank"><FaPhone className="w-[14px]" /> +90 537 344 25 66</a></li>
                    <li className="flex text-[9px] md:text-xs text-orange-800"><a href="tel:+90 532 567 53 50" className="flex items-center gap-[5px]" target="_blank"><FaPhone className="w-[14px]" /> +90 532 567 53 50</a></li>
                    <li className="flex text-[9px] md:text-xs text-orange-800"><a href="mailto:info@reformmarine.com" className="flex items-center gap-[5px]" target="_blank"><IoMdMail className="w-[14px]" /> info@reformmarine.com</a></li>
                </ul>
                <Show>
                    <ul className="flex items-center gap-1 w-fit h-full text-md text-orange-800">
                        <a href="https://wa.me/905373442566" target="_blank">
                            <li><FaSquareWhatsapp/></li>
                        </a>
                        <a href="https://www.instagram.com/reformmarine/" target="_blank">
                            <li><FaSquareInstagram /></li>
                        </a>
                        <a href="https://www.linkedin.com/company/reformmarine" target="_blank">
                            <li><FaLinkedin /></li>
                        </a>
                        <a href="https://maps.app.goo.gl/W7u82W33xBcFCY628" target="_blank">
                            <li><FaGooglePlus /></li>
                        </a>
                    </ul>
                </Show>
            </div>
        </div>
        <div className="flex w-full h-fit items-center justify-center bg-transparent">
            <div className="flex w-full h-[67px] lg:h-[100px] max-w-screen-xl justify-between items-center p-2">
                <div className="flex w-fit min-w-[160px] max-w-[227px] h-full max-h-[77px]">
                    <Link to="/" replace><img src={DesktopWhiteLogo} alt="Reform Marine White Color Brand Logo" className="w-full h-full"/></Link>
                </div>
            </div>
        </div>
    </header>
  )
}
