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
        { key: 'electrical', label: <Link to="electrical">Electrical Service</Link>,       
          children: [
            { key: 'tank-radar-system', label: <Link to="electrical/tank-radar-system">Tank Radar System</Link>},
            { key: 'tank-level-gauging-system', label: <Link to="electrical/tank-level-gauging-system">Tank Level Gauging System</Link>},
            { key: 'high-level-overfill-system', label: <Link to="electrical/high-level-overfill-system">High Level Overfill System</Link>},
            { key: 'gas-detection-system', label: <Link to="electrical/gas-detection-system">Gas Detection System</Link>},
            { key: 'gas-sampling-system', label: <Link to="electrical/gas-sampling-system">Gas Sampling System</Link>},
            { key: 'fire-alarm-system', label: <Link to="electrical/fire-alarm-system">Fire Alarm System</Link>},
            { key: 'navigation-lights-control-panel', label: <Link to="electrical/navigation-lights-control-panel">Navigation Lights Control Panel</Link>},
            { key: 'water-ingress-alarm-system', label: <Link to="electrical/water-ingress-alarm-system">Water Ingress Alarm System</Link>},
            { key: 'remote-controlled-valve-systems', label: <Link to="electrical/remote-controlled-valve-systems">Remote Controlled Valve Systems</Link>},
            { key: 'oil-discharge-monitoring-system', label: <Link to="electrical/oil-discharge-monitoring-system">Oil Discharge Monitoring System</Link>},
            { key: 'ullage-temperature-interface', label: <Link to="electrical/ullage-temperature-interface">Ullage Temperature Interface</Link>},
            { key: 'oily-water-seperator', label: <Link to="electrical/oily-water-seperator">Oily Water Seperator</Link>},
            { key: 'flowmeters', label: <Link to="electrical/flowmeters">Flowmeters</Link>},
          ],
      },
        { key: 'mechanical', label: <Link to="mechanical">Mechanical Service</Link>, 
          children: [
            { key: 'main-engine-service', label: <Link to="mechanical/main-engine-service">Main Engine Service</Link>},
            { key: 'diesel-generator-maintenance-service', label: <Link to="mechanical/diesel-generator-maintenance-service">Diesel Generator Maintenance & Service</Link>},
            { key: 'alternator-service', label: <Link to="mechanical/alternator-service">Alternator Service</Link>},
            { key: 'auxiliary-machinery-service', label: <Link to="mechanical/auxiliary-machinery-service">Auxiliary Machinery Service</Link>},
            { key: 'ballast-water-treatment-system', label: <Link to="mechanical/ballast-water-treatment-system">Ballast Water Treatment System</Link>},
            { key: 'exhaust-gas-scrubber', label: <Link to="mechanical/exhaust-gas-scrubber">Exhaust Gas Scrubber</Link>},
            { key: 'air-compressor-overhaul', label: <Link to="mechanical/air-compressor-overhaul">Air Compressor Overhaul</Link>},
            { key: 'aux-composite-boilers-maintenance', label: <Link to="mechanical/aux-composite-boilers-maintenance">Aux and Composite Boilers Maintenance</Link>},
            { key: 'incinerator-maintenance-refactory', label: <Link to="mechanical/incinerator-maintenance-refactory">Incinerator Maintenance and Refactory</Link>},
            { key: 'air-condition-refrigeration-maintenance', label: <Link to="mechanical/air-condition-refrigeration-maintenance">Air Condition and Refrigeration Systems Maintenance</Link>}
          ]
        },
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

function MenuAuto({mode="inline", theme="light", onClose, className, callToAction}: {mode:any, theme: MenuTheme, onClose?: any, className?:string, callToAction?:boolean}) {
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
              // disabledOverflow={true}
              theme={theme}
              className={className}
          />
          {callToAction ? <Link to="contact"><Button type={theme === "light" ? "primary" : "default"} className="text-sm lg:text-base p-4 ml-2 font-semibold">Get a quote</Button></Link> : null}
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