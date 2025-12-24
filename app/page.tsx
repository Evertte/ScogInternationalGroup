import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import Activities from "@/components/sections/Activities";
import Leaders from "@/components/sections/Leaders";
import Members from "@/components/sections/Members";
import GetConnected from "@/components/sections/GetConnected";

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <Highlights />
      <Activities />
      <Leaders />
      <Members />
      <GetConnected />
    </main>
  );
}
