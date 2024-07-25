import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-fit bg-white-light">
      <Hero />
      <Skills />
      <Services />
      <AboutUs className="mt-[200px]"/>
      <ContactUs />
    </div>
  )
} 