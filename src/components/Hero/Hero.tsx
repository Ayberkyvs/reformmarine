import { Button } from "antd";
import HeroImage from "../../assets/hero/hero.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HeroHeading = ()=> {
    return (
      <div className="px-4 w-full lg:w-1/2">
        <h1 className="text-3xl lg:text-4xl font-bold text-blue-900 leading-[150%]">
          Your Reliable <br /> <span className="hero--vector px-2">Partner</span> In Maritime
        </h1>
        <p className="max-w-2xl text-sm lg:text-base mt-8 text-neutral-700 leading-[1.7]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At sed tempore quaerat nesciunt earum ipsum doloribus eius maiores rem dolore id quas, explicabo ea neque nulla, consequatur voluptas ratione odio!.
        </p>
        <Button type="primary" className="uppercase font-bold mt-4 h-10">Get a quote</Button>
      </div>
    )
}
export default function Hero() {
  return (
    <section className="home flex justify-center items-center w-full h-[100vh] mb-10">
        <div className="flex justify-center items-center max-w-screen-xl w-full h-full">
            <HeroHeading />
            <div className="hidden lg:flex w-1/2 h-fit">
                <LazyLoadImage src={HeroImage} className="w-full h-full" draggable={false}/>
            </div>
        </div>
    </section>
  )
}