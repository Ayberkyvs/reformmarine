import { Menu, MenuProps } from "antd";
import { Link } from "react-router-dom";
import Socials from '../Socials'; // Ensure you have your Socials component

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    { key: '1', label: <Link to="/" className="font-semibold">Home</Link> },
    { type: 'divider' },
    { key: '2', label: <Link to="/products" className="font-semibold">Products</Link> },
    { type: 'divider' },
    {
        key: 'menu2',
        label: <span className="font-semibold">Services</span>,
        children: [
            { key: '4', label: <Link to="/electrical">Electrical Service</Link> },
            { key: '5', label: <Link to="/mechanical">Mechanical Service</Link> },
            { key: '6', label: <Link to="/spareparts">Spare Parts</Link> },
        ],
    },
    { type: 'divider' },
    {
        key: 'menu1',
        label: <span className="font-semibold">About Us</span>,
        children: [
            { key: '7', label: <Link to="/company">The Company</Link> },
            { key: '8', label: <Link to="/gallery">Gallery</Link> },
        ],
    },
    { type: 'divider' },
    { key: '8', label: <Link to="/contactus" className="font-semibold">Contact Us</Link> },
];

const Footer = () => (
    <footer className="bg-blue-900 text-white pt-10">
        <div className="container mx-auto px-4 max-w-screen-xl">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex items-center justify-center lg:justify-start mb-6 lg:mb-0">
                    <img
                        src="https://reformmarine.com/logo-short-white.png"
                        alt="Reform Marine Logo"
                        className="mx-auto lg:mx-0 max-w-[60px] lg:max-w-[70px]"
                    />
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:w-full mb-6 lg:mb-0">
                    <Menu
                        mode="horizontal"
                        items={items}
                        theme="dark"
                        className="bg-transparent text-white justify-center lg:justify-end lg:w-full"
                    />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-6">
                <div className="text-center lg:text-left lg:w-1/2">
                    <p className="text-sm font-medium mb-2 border-b border-white/70 pb-1">Contact Information</p>
                    <p className="text-sm text-white/80">Postane, Kılıç Cd. No:18, 34940 Tuzla/İstanbul</p>
                    <p className="text-sm text-white/80">
                        Tel: 
                        <a href="tel:+905373442566" className="text-white hover:underline text-white/80">+90 537 344 25 66</a>/
                        <a href="tel:+905325675350" className="text-white hover:underline text-white/80">+90 532 567 53 50</a>
                    </p>
                    <p className="text-sm text-white/80">Mail: <a href="mailto:info@reformmarine.com" className="text-white hover:underline text-white/80">info@reformmarine.com</a></p>
                </div>
                <div className="flex flex-col text-center items-center lg:text-right lg:items-end lg:w-1/2">
                    <p className="text-sm font-medium mb-2 border-b border-white/70 pb-1 w-full">Our Socials</p>
                    <Socials className="text-white/80" />
                </div>
            </div>
        </div>
        <div className="pt-4 py-5 text-center bg-blue-800">
            <p className="text-sm">Copyright © 2024 Reform Marine. All rights reserved.</p>
        </div>
    </footer>
);

export default Footer;
