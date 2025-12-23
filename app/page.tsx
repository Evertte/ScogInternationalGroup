import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import About from "@/components/sections/About";
import Activities from "@/components/sections/Activities";
import Leaders from "@/components/sections/Leaders";
import Members from "@/components/sections/Members";

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <Highlights />
      <About />
      <Activities />
      <Leaders />
      <Members />
    </main>
  );
}
