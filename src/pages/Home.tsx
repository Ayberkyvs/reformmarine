import Hero from "../components/Hero/Hero";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <section className="w-full h-fit pb-[100px] bg-white-light">
      {/* <HeroParallax products={products} /> */}
      <Hero />
      <Skills />
    </section>
  )
} 