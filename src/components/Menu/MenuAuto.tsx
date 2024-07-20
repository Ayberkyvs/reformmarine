import { Menu, MenuProps, Button } from "antd"
import { Link } from "react-router-dom";
import Socials from "../Socials";

type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
    { key: '1', label: <Link to="/" className="font-semibold">Home</Link>},
    {
      type: 'divider',
    },
    { key: '2', label: <Link to="/products" className="font-semibold">Products</Link>},
    {
      type: 'divider',
    },
    {
      key: 'menu2',
      label: <span className="font-semibold">Services</span>,
      children: [
        { key: '4', label: <Link to="/electrical">Electrical Service</Link>},
        { key: '5', label: <Link to="/mechanical">Mechanical Service</Link>},
        { key: '6', label: <Link to="/spareparts">Spare Parts</Link>},
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'menu1',
      label: <span className="font-semibold">About Us</span>,
      children: [
        { key: '7', label: <Link to="/company">The Company</Link>},
        { key: '8', label: <Link to="/gallery">Gallery</Link>},
      ],
    },
    {
      type: 'divider',
    },
    { key: '8', label: <Link to="/contactus" className="font-semibold">Contact Us</Link>},
  ];

function MenuAuto({mode="inline"}: {mode:any}) {
    if (mode == "horizontal") {
        return (
          <>
          <Menu
              style={{background: "transparent", width: "100%", display: "flex"}}
              defaultSelectedKeys={['1']}
              mode={mode}
              items={items}
              disabledOverflow={true}
          />
          <Button type="primary" className="text-sm lg:text-base p-4 ml-2 font-semibold rounded-md">Get a quote</Button>
          </>
        )
    }
  return (
    <div className="gap-2">
    <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['menu1']}
        mode={mode}
        items={items}
    />
    {/* <Button className="max-w-[330px] w-full h-[40px] text-base uppercase font-semibold" type="primary">Get A Quote</Button> */}
    <Socials className="mt-6 w-full justify-evenly items-start text-xl text-orange-500"/>
    </div>
  )
}

export default MenuAuto