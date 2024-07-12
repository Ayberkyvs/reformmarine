import { FloatButton } from 'antd';
import { FaWhatsapp } from "react-icons/fa";
import { FaBolt } from "react-icons/fa6";
import { GrMapLocation } from "react-icons/gr";


export default function FloatingButtonMenu() {
  
    return (
        <FloatButton.Group
        trigger="click"
        type="primary"
        style={{ right: 20, bottom: 20 }}
        icon={<FaBolt />}
      >
        <FloatButton icon={<a href='https://maps.app.goo.gl/W7u82W33xBcFCY628' target='_blank' className='hover:text-blue-600'><GrMapLocation /></a>}/>
        <FloatButton icon={<a href='https://wa.me/905325675350' target='_blank' className='hover:text-green-600'><FaWhatsapp/></a>}/>
      </FloatButton.Group>
    );
}
