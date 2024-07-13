"use client";
import { Tabs } from "../components/ui/tabs";
import Image1 from "../assets/services/services-products.jpg";
import Image2 from "../assets/services/services-electrical.jpg";
import Image3 from "../assets/services/services-mechanical.jpg";
import Image4 from "../assets/services/services-spareparts.jpg";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6"
import { LazyLoadImage } from "react-lazy-load-image-component";

const DummyContent = ({title, description, calltoaction, image}: {title:string, description?:string, calltoaction:string, image?:string}) => {
  return (
    <div className="flex justify-between items-center gap-8 w-full h-full">
      <div className="flex flex-col justify-center items-start gap-3 h-full">
        <h1 className="font-bold text-lg lg:text-xl">{title}</h1>
        <p className="max-w-[550px] text-sm lg:text-base font-normal text-black/80">{description}</p>
        <Link to={calltoaction}><Button type="default" className="mt-4 py-4 text-xs lg:text-sm bg-primary text-white uppercase" icon={<FaAngleRight />} iconPosition="end">Learn More</Button></Link>
      </div>
      <LazyLoadImage src={image} className="hidden lg:flex w-[480px] h-full rounded-xl"/>
    </div>
  );
};

const tabs = [
  {
    title: "Products",
    value: "products",
    content: (
      <div className="flex justify-center w-full overflow-hidden relative h-full rounded-2xl p-10 text-blue-900 bg-gradient-to-br from-blue-50 to-blue-300">
        <DummyContent title="Products" description="We offer a comprehensive range of spare parts 
        for electrical and machinery systems, ensuring that you have everything you need to 
        keep your vessel running smoothly and efficiently." calltoaction="/products" image={Image1}/>
      </div>
    ),
  },
  {
    title: "Electrical Service",
    value: "Electrical Service",
    content: (
      <div className="flex justify-center w-full overflow-hidden relative h-full rounded-2xl p-10 text-orange-900 bg-gradient-to-br from-orange-50 to-orange-300">
        <DummyContent title="Electrical Service" description="Lorem ipsum dolor sit amet consectetur. Imperdiet sollicitudin gravida tincidunt elit sed elit netus orci accumsan. Habitasse pretium viverra nullam turpis. A nunc aenean 
        pellentesque sed ac eu nulla elementum nibh. Bibendum eget at urna erat. Vel 
        vitae facilisis varius posuere viverra egestas risus eu. Tellus turpis purus 
        faucibus semper amet amet. In id." calltoaction="/electrical" image={Image2}/>
      </div>
    ),
  },
  {
    title: "Mechanical Service",
    value: "Mechanical Service",
    content: (
      <div className="flex justify-center w-full overflow-hidden relative h-full rounded-2xl p-10 text-green-900 bg-gradient-to-br from-green-50 to-green-300">
        <DummyContent title="Mechanical Service" description="Lorem ipsum dolor sit amet consectetur. Imperdiet sollicitudin gravida tincidunt elit sed elit netus orci accumsan. Habitasse pretium viverra nullam turpis. A nunc aenean 
        pellentesque sed ac eu nulla elementum nibh. Bibendum eget at urna erat. Vel 
        vitae facilisis varius posuere viverra egestas risus eu. Tellus turpis purus 
        faucibus semper amet amet. In id." calltoaction="/Mechanical" image={Image3}/>
      </div>
    ),
  },
  {
    title: "Spare Parts",
    value: "Spare Parts",
    content: (
      <div className="flex justify-center w-full overflow-hidden relative h-full rounded-2xl p-10 text-red-900 bg-gradient-to-br from-red-50 to-red-300">
        <DummyContent title="Spare Parts" description="Lorem ipsum dolor sit amet consectetur. Imperdiet sollicitudin gravida tincidunt elit sed elit netus orci accumsan. Habitasse pretium viverra nullam turpis. A nunc aenean 
        pellentesque sed ac eu nulla elementum nibh. Bibendum eget at urna erat. Vel 
        vitae facilisis varius posuere viverra egestas risus eu. Tellus turpis purus 
        faucibus semper amet amet. In id." calltoaction="/spareparts" image={Image4}/>
      </div>
    ),
  },
];

function Services() {
  return (
    <div className="h-[25rem] lg:h-[30rem] [perspective:1000px] relative flex flex-col max-w-screen-xl mx-auto w-full items-start justify-start my-20 px-4 lg:p-0">
      <Tabs tabs={tabs} />
    </div>
  )
}

export default Services