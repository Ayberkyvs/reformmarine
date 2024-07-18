import { Button } from "antd";
import HeroImage from "../../assets/hero/hero.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HeroHeading = ()=> {
    return (
      <div className="flex flex-col justify-center items-start px-4 w-full h-full lg:w-1/2">
        <h1 className="text-3xl lg:text-4xl font-bold text-blue-900 leading-[150%]">
          Your Reliable <br /> <span className="hero--vector px-2">Partner</span> In Maritime
        </h1>
        <p className="max-w-xl text-sm lg:text-base mt-8 text-neutral-700 leading-[1.7]">
        Reform Marine offers customized solutions to the maritime industry as a company 
        specialized in electrical systems maintenance and repair. Our professional teams 
        optimize the travel experience by improving the safety and performance of marine 
        vessels with electrical maintenance services.
        </p>
        <Button type="primary" className="text-sm lg:text-base p-4 uppercase font-bold mt-4 rounded-full">Get a quote</Button>
      </div>
    )
}
export default function Hero() {
  return (
    <section className="home flex justify-center items-center w-full h-[100vh] mb-10">
        <div className="flex justify-center items-center max-w-screen-xl w-full h-full gap-4">
            <HeroHeading />
            <div className="hidden lg:flex lg:justify-end w-1/2 h-fit">
                <LazyLoadImage src={HeroImage} className="w-full h-full object-cover object-top" draggable={false}/>
            </div>
        </div>
    </section>
  )
}
