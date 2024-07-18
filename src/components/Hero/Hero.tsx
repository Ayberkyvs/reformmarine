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
        <Button type="primary" className="uppercase font-bold mt-4 h-10">Get a quote</Button>
      </div>
    )
}
export default function Hero() {
  return (
    <section className="home flex justify-center items-center w-full h-screen mb-10">
        <div className="flex justify-center items-center max-w-screen-xl w-full h-full max-h-[500px] gap-4">
            <HeroHeading />
            <div className="hidden lg:flex w-1/2 h-full">
                <LazyLoadImage src={HeroImage} className="w-full h-full object-fill" draggable={false}/>
            </div>
        </div>
    </section>
  )
}
