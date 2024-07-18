import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <section className="flex flex-col gap-[50px] w-full h-fit pb-[100px] bg-white-light">
      <Hero />
      <Skills />
      <Services />
      <AboutUs />
    </section>
  )
} 