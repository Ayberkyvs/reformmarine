import HeroImage from "../../assets/hero/hero.png";

const HeroHeading = ()=> {
    return (
      <div className="px-4 w-full lg:w-1/2">
        <h1 className="text-3xl lg:text-4xl font-bold text-blue-900">
          Your Reliable <br /> <span className="text-orange-500">Partner</span> In Maritime
        </h1>
        <p className="max-w-2xl text-sm lg:text-base mt-8 text-neutral-700">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At sed tempore quaerat nesciunt earum ipsum doloribus eius maiores rem dolore id quas, explicabo ea neque nulla, consequatur voluptas ratione odio!.
        </p>
      </div>
    )
}
export default function Hero() {
  return (
    <section className="home flex justify-center items-center w-full h-[100vh] mb-10">
        <div className="flex justify-center items-center max-w-screen-xl w-full h-full">
            <HeroHeading />
            <div className="hidden lg:flex w-1/2 h-fit">
                <img src={HeroImage} className="w-full h-full"/>
            </div>
        </div>
    </section>
  )
}
