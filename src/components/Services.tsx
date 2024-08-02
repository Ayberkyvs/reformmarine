"use client";
import { Tabs } from "../components/ui/tabs";
import Image1 from "../assets/banners/products.webp";
import Image2 from "../assets/banners/electrical.webp";
import Image3 from "../assets/banners/mechanical.webp";
import Image4 from "../assets/banners/spareparts.webp";
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
      <div className="flex justify-center w-full overflow-hidden relative h-full rounded-2xl p-8 text-blue-900 bg-gradient-to-br from-blue-50 to-blue-300">
        <DummyContent title="Products" description="We offer a comprehensive range of spare parts 
        for electrical and machinery systems, ensuring that you have everything you need to 
        keep your vessel running smoothly and efficiently." calltoaction="/products" image={Image1}/>
      </div>
    ),
  },
  {
    title: "Electrical",
    value: "Electrical",
    content: (
      <div className="flex justify-center w-full overflow-hidden relative h-full rounded-2xl p-8 text-orange-900 bg-gradient-to-br from-orange-50 to-orange-300">
        <DummyContent title="Electrical Service" description="Lorem ipsum dolor sit amet consectetur. Imperdiet sollicitudin gravida tincidunt elit sed elit netus orci accumsan. Habitasse pretium viverra nullam turpis. A nunc aenean 
        pellentesque sed ac eu nulla elementum nibh. Bibendum eget at urna erat. Vel 
        vitae facilisis varius posuere viverra egestas risus eu. Tellus turpis purus 
        faucibus semper amet amet. In id." calltoaction="/electrical" image={Image2}/>
      </div>
    ),
  },
  {
    title: "Mechanical",
    value: "Mechanical",
    content: (
      <div className="flex justify-center w-full overflow-hidden relative h-full rounded-2xl p-8 text-green-900 bg-gradient-to-br from-green-50 to-green-300">
        <DummyContent title="Mechanical Service" description="Lorem ipsum dolor sit amet consectetur. Imperdiet sollicitudin gravida tincidunt elit sed elit netus orci accumsan. Habitasse pretium viverra nullam turpis. A nunc aenean 
        pellentesque sed ac eu nulla elementum nibh. Bibendum eget at urna erat. Vel 
        vitae facilisis varius posuere viverra egestas risus eu. Tellus turpis purus 
        faucibus semper amet amet. In id." calltoaction="/mechanical" image={Image3}/>
      </div>
    ),
  },
  {
    title: "Spare Parts",
    value: "Spare Parts",
    content: (
      <div className="flex justify-center w-full overflow-hidden relative h-full rounded-2xl p-8 text-red-900 bg-gradient-to-br from-red-50 to-red-300">
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
    <section className="w-full h-full my-20 mt-[100px]">
      <div className="h-[25rem] lg:h-[30rem] [perspective:1000px] relative flex flex-col max-w-screen-xl mx-auto w-full items-start justify-start px-4 lg:p-0">
        <Tabs tabs={tabs} />
      </div>
    </section>
  )
}

export default Services