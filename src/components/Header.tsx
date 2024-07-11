import { IoIosMail, IoMdMenu } from "react-icons/io";
import { FaPhone, FaAngleDown } from "react-icons/fa6";     
import DesktopWhiteLogo from "../assets/logo-white-desktop.png"
import Show from "./Show";
import { Link } from "react-router-dom";
import Socials from "./Socials";
import { Dropdown, MenuProps as AntdMenuProps, Space, Button, Menu } from "antd";
import Hide from "./Hide";
import DrawerComponent from "./Menu/Drawer";;

interface Menu {
  label: string;
  isDropdown: boolean;
  href: string;
  items?: AntdMenuProps["items"];
}

type MenuItem = Required<AntdMenuProps>['items'][number];

const menu: Menu[] = [
  {
    label: "Home",
    isDropdown: false,
    href: "/",
  },
  {
    label: "About Us",
    isDropdown: true,
    href: "/aboutus",
    items: [
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            The Company
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            Gallery
          </a>
        ),
      },
    ]
  },
  {
    label: "Services",
    isDropdown: true,
    href: "/services",
    items: [
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com"> 
            Electrical Service
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            Mechanical Service
          </a>
        ),
      },
      {
        type: 'divider',
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            Spare Parts
          </a>
        ),
      },
    ]
  },
  {
    label: "Products",
    isDropdown: false,
    href: "/products",
  },
  {
    label: "Contact Us",
    isDropdown: false,
    href: "/contactus",
  }
]


const MenuComponent = ({ className, menu }: { className?: string, menu: Menu[] }) => {
  return (
    <div className={className}>
      {menu.map((menuItem, index) => {
        if (menuItem.isDropdown) {
          return (
            <Link key={index} to={menuItem.href}>
                <Dropdown menu={{ items: menuItem.items }} arrow>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space className="flex justify-center items-center">
                            {menuItem.label}
                            <FaAngleDown />
                        </Space>
                    </a>
                </Dropdown>
            </Link>
          );
        } else {
          return (
            <Link key={index} to={menuItem.href}>
              {menuItem.label}
            </Link>
          );
        }
      })}
    </div>
  );
};

const items: MenuItem[] = [
  { key: '1', label: <Link to="/" className="uppercase font-bold">HOME</Link>},
  {
    type: 'divider',
  },
  {
    key: 'menu1',
    label: <span className="uppercase font-bold">About Us</span>,
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
    label: <span className="uppercase font-bold">Services</span>,
    children: [
      { key: '4', label: <Link to="/electrical">Electrical Service</Link>},
      { key: '5', label: <Link to="/mechanical">Mechanical Service</Link>},
      { key: '6', label: <Link to="/spareparts">Spare Parts</Link>},
    ],
  },
  {
    type: 'divider',
  },
  { key: '2', label: <Link to="/products" className="uppercase font-bold">Products</Link>},
  {
    type: 'divider',
  },
  { key: '3', label: <Link to="/contactus" className="uppercase font-bold">Contact Us</Link>},
];

export default function Header() {
  return (
    <header className="fixed w-full h-[127px]">
        <div className="flex w-full h-fit bg-orange-50 items-center justify-center">
            <div className="flex w-full max-w-screen-xl h-[25px] lg:h-[30px] justify-between items-center p-2">
                <ul className="flex items-center gap-2 md:gap-5 w-full h-full justify-between lg:justify-start text-xs">
                    <li className="flex text-[9px] md:text-xs text-orange-800"><a href="tel:+90 537 344 25 66" className="flex items-center gap-[5px]" target="_blank"><FaPhone className="w-[14px] h-[14px]" /> +90 537 344 25 66</a></li>
                    <li className="flex text-[9px] md:text-xs text-orange-800"><a href="tel:+90 532 567 53 50" className="flex items-center gap-[5px]" target="_blank"><FaPhone className="w-[14px] h-[14px]" /> +90 532 567 53 50</a></li>
                    <li className="flex text-[9px] md:text-xs text-orange-800"><a href="mailto:info@reformmarine.com" className="flex items-center gap-[5px]" target="_blank"><IoIosMail className="w-[20px] h-[20px]"/> info@reformmarine.com</a></li>
                </ul>
                <Show>
                    <Socials />
                </Show>
            </div>
        </div>
        <div className="flex w-full h-fit items-center justify-center bg-transparent">
            <div className="flex w-full h-[67px] lg:h-[100px] max-w-screen-xl justify-between items-center p-2">
                <div className="flex w-fit min-w-[160px] max-w-[227px] h-full max-h-[77px]">
                    <Link to="/" replace><img src={DesktopWhiteLogo} alt="Reform Marine White Color Brand Logo" className="w-full h-full"/></Link>
                </div>
                <div className="w-fit h-fit">
                    <Show>
                      <div className="flex justify-center items-center gap-10">
                        <MenuComponent menu={menu} className="flex gap-10 uppercase font-bold text-white" />
                        <Button className="w-[130px] h-[40px] text-base uppercase bg-primary text-white font-bold border-0">Get A Quote</Button>
                      </div>
                    </Show>
                    <Hide>
                        <DrawerComponent btnTitle={<IoMdMenu className="w-7 h-7"/>} btnType="link" btnClassName="text-white">
                        <Menu
                          className="w-full"
                          defaultSelectedKeys={['1']}
                          defaultOpenKeys={['menu1']}
                          mode="inline"
                          items={items}
                        />
                        </DrawerComponent>
                    </Hide>
                </div>
            </div>
        </div>
    </header>
  )
}
