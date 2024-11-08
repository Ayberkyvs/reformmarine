import { FaPhone } from 'react-icons/fa6'
import Show from '../Show'
import Socials from '../Socials'
import { IoIosMail } from 'react-icons/io'

function Infobar() {
  return (
    <div className="flex w-full bg-orange-50 items-center justify-center h-[25px] lg:h-[30px]">
        <div className="flex w-full max-w-screen-xl h-full justify-between p-2">
            <ul className="flex items-center gap-2 md:gap-5 w-full h-full justify-between lg:justify-start text-xs">
                <li className="flex text-[9px] md:text-xs text-orange-800"><a href="tel:+90 537 344 25 66" className="flex items-center gap-[5px]" target="_blank"><FaPhone className="w-[1em] h-[1em]" /> +90 537 344 25 66</a></li>
                <li className="flex text-[9px] md:text-xs text-orange-800"><a href="tel:+90 532 567 53 50" className="flex items-center gap-[5px]" target="_blank"><FaPhone className="w-[1em] h-[1em]" /> +90 532 567 53 50</a></li>
                <li className="flex text-[9px] md:text-xs text-orange-800"><a href="mailto:info@reformmarine.com" className="flex items-center gap-[5px]" target="_blank"><IoIosMail className="w-[1.5em] h-[1.5em]"/> info@reformmarine.com</a></li>
            </ul>
            <Show>
                <Socials />
            </Show>
        </div>
    </div>
  )
}

export default Infobar