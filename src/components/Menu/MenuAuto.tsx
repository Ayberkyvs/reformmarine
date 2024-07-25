import { Menu, MenuProps, Button, MenuTheme } from "antd"
import { Link, useLocation } from "react-router-dom";
import Socials from "../Socials";

type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
    { key: 'home', label: <Link to="/" className="font-semibold">Home</Link>},
    {
      type: 'divider',
    },
    { key: 'products', label: <Link to="products" className="font-semibold">Products</Link>},
    {
      type: 'divider',
    },
    {
      key: 'menu1',
      label: <span className="font-semibold">Services</span>,
      children: [
        { key: 'electrical', label: <Link to="electrical">Electrical Service</Link>},
        { key: 'mechanical', label: <Link to="mechanical">Mechanical Service</Link>},
        { key: 'spareparts', label: <Link to="spareparts">Spare Parts</Link>},
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'menu2',
      label: <span className="font-semibold">About Us</span>,
      children: [
        { key: 'company', label: <Link to="company">The Company</Link>},
        { key: 'gallery', label: <Link to="gallery">Gallery</Link>},
      ],
    },
    {
      type: 'divider',
    },
    { key: 'contact', label: <Link to="contact" className="font-semibold">Contact Us</Link>},
  ];

function MenuAuto({mode="inline", theme="light", onClose}: {mode:any, theme: MenuTheme, onClose?: any}) {
    const location = useLocation();
    const pathSnippets = (location.pathname.split('/').filter(i => i).length > 0 ? location.pathname.split('/').filter(i => i) : ["home"]);
    if (mode == "horizontal") {
        return (
          <>
          <Menu
              style={{background: "transparent", width: "100%", display: "flex"}}
              selectedKeys={pathSnippets}
              defaultSelectedKeys={["home"]}
              mode={mode}
              items={items}
              disabledOverflow={true}
              theme={theme}
          />
          <Button type={theme === "light" ? "primary" : "default"} className="text-sm lg:text-base p-4 ml-2 font-semibold rounded-md">Get a quote</Button>
          </>
        )
    }
  return (
    <div className="gap-2">
    <Menu
        selectedKeys={pathSnippets}
        defaultSelectedKeys={["home"]}
        defaultOpenKeys={['menu1']}
        mode={mode}
        items={items}
        onClick={()=> onClose()}
    />
    {/* <Button className="max-w-[330px] w-full h-[40px] text-base uppercase font-semibold" type="primary">Get A Quote</Button> */}
    <Socials className="mt-6 w-full justify-evenly items-start text-xl text-orange-500"/>
    </div>
  )
}

export default MenuAuto