import { FaWhatsapp, FaInstagram, FaLinkedin, FaGooglePlus } from "react-icons/fa6";

export default function Socials({className}: {className?:String}) {
  return (
    <ul className={`flex items-center gap-[5px] w-fit h-full text-base text-orange-800 ${className}`}>
        <a href="https://wa.me/905325675350" target="_blank">
            <li><FaWhatsapp/></li>
        </a>
        <a href="https://www.instagram.com/reformmarine/" target="_blank">
            <li><FaInstagram /></li>
        </a>
        <a href="https://www.linkedin.com/company/reformmarine" target="_blank">
            <li><FaLinkedin /></li>
        </a>
        <a href="https://maps.app.goo.gl/W7u82W33xBcFCY628" target="_blank">
            <li><FaGooglePlus /></li>
        </a>
    </ul>
  )
}
