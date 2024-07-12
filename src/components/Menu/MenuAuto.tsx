import { Menu, MenuProps, Button } from "antd"
import { Link } from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
    { key: '1', label: <Link to="/" className="uppercase font-semibold">HOME</Link>},
    {
      type: 'divider',
    },
    {
      key: 'menu1',
      label: <span className="uppercase font-semibold">About Us</span>,
      children: [
        { key: '2', label: <Link to="/company">The Company</Link>},
        { key: '3', label: <Link to="/gallery">Gallery</Link>},
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'menu2',
      label: <span className="uppercase font-semibold">Services</span>,
      children: [
        { key: '4', label: <Link to="/electrical">Electrical Service</Link>},
        { key: '5', label: <Link to="/mechanical">Mechanical Service</Link>},
        { key: '6', label: <Link to="/spareparts">Spare Parts</Link>},
      ],
    },
    {
      type: 'divider',
    },
    { key: '7', label: <Link to="/products" className="uppercase font-semibold">Products</Link>},
    {
      type: 'divider',
    },
    { key: '8', label: <Link to="/contactus" className="uppercase font-semibold">Contact Us</Link>},
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
            <Button className="w-[130px] h-[40px] text-base uppercase font-semibold border-0" type="primary">Get A Quote</Button>
        </>
        )
    }
  return (
    <>
    <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['menu1']}
        mode={mode}
        items={items}
    />
    <Button className="max-w-[330px] w-full h-[40px] text-base uppercase font-semibold mt-2" type="primary">Get A Quote</Button>
    </>
  )
}

export default MenuAuto