import { Carousel } from "antd";
import React from "react";

interface HeroHeadingProps {
  title: string | React.ReactNode;
  description?: string;
}

const HeroHeading: React.FC<HeroHeadingProps> = ({ title, description }) => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left z-10 mt-10">
      <h1 className="text-3xl lg:text-4xl font-bold text-white">
        {title}
      </h1>
      <p className="text-sm lg:text-base mt-8 text-white/80 leading-[1.5]">
        {description}
      </p>
    </div>
  );
};

const contentStyle: React.CSSProperties = {
  margin: 0,
  width: '100%',
  height: '90vh',
  color: '#fff',
  lineHeight: '90vh',
  textAlign: 'center',
  background: '#364d79',
};

const description = `Reform Marine offers customized solutions to the maritime industry as a company 
        specialized in electrical systems maintenance and repair. Our professional teams 
        optimize the travel experience by improving the safety and performance of marine 
        vessels with electrical maintenance services.`;
export default function Hero() {
  return (
    <div className="w-full h-[90vh] relative">
      <Carousel arrows dotPosition="left" infinite={false} vertical>
        <div className="relative">
          <HeroHeading title={<>Your Reliable <br /> <span className="hero--vector px-2">Partner</span> In Maritime</>} description={description}/>
          <img
            src="https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="1"
            style={contentStyle}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative">
          <HeroHeading title={<>Navigating <span className="hero--vector px-2">Excellence</span> <br /> in Every Voyage</>} description={description}/>
          <img
            src="https://images.pexels.com/photos/3848793/pexels-photo-3848793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="2"
            style={contentStyle}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative">
          <HeroHeading title={<>Empowering Marine <br /> <span className="hero--vector px-2">Innovation</span></>} description={description}/>
          <img
            src="https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="3"
            style={contentStyle}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative">
          <HeroHeading title={<>Sailing Towards a <br /> Safer <span className="hero--vector px-2">Future</span></>} description={description}/>
          <img
            src="https://images.pexels.com/photos/12491651/pexels-photo-12491651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="4"
            style={contentStyle}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </Carousel>
    </div>
  );
}
