import Contact from "@/components/sections/contact";
import Features from "@/components/sections/features";
import Hero from "@/components/sections/hero";
import Portfolio from "@/components/sections/portfolio";
import Services from "@/components/sections/services";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <Portfolio />
      <Contact />
    </>
  );
}
