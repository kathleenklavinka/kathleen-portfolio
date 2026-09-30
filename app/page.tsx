import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen overflow-x-hidden bg-shell">
      <Navbar />
      <Hero />
    </main>
  );
}
