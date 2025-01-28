import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import Partner from "@/app/components/Partner";
import Contact from "@/app/components/Contact";
import Featured from "@/app/components/Featured";
import Story from "@/app/components/Story";

export default function Home() {
  return (
    <main>
      <Hero />
      <Story />
      <Services />
      <Partner />
      <Contact />
      <Featured />
    </main>
  );
}
