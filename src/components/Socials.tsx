import { FaWhatsapp, FaInstagram, FaLinkedin, FaGooglePlus } from "react-icons/fa6";

export default function Socials({className}: {className?:String}) {
  return (
    <ul className={`flex items-center gap-[10px] w-fit h-full text-orange-800 ${className}`}>
        <a href="https://wa.me/905325675350" target="_blank">
            <li><FaWhatsapp className="w-[1em] h-[1em]" /></li>
        </a>
        <a href="https://www.instagram.com/reformmarine/" target="_blank">
            <li><FaInstagram className="w-[1em] h-[1em]" /></li>
        </a>
        <a href="https://www.linkedin.com/company/reformmarine" target="_blank">
            <li><FaLinkedin className="w-[1em] h-[1em]" /></li>
        </a>
        <a href="https://maps.app.goo.gl/W7u82W33xBcFCY628" target="_blank">
            <li><FaGooglePlus className="w-[1em] h-[1em]" /></li>
        </a>
    </ul>
  )
}
