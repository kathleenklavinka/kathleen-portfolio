import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen overflow-x-hidden bg-shell">
      <Navbar />
      <Hero />
      <Marquee />
    </main>
  );
}
