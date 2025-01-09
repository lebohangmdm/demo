import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Services from "@/app/components/Services";
import Partner from "@/app/components/Partner";
import Contact from "@/app/components/Contact";
import Featured from "@/app/components/Featured";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Partner />
      <Contact />
      <Featured />
    </main>
  );
}
